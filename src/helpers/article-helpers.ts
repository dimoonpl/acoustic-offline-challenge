import { API_ROUTES } from 'constants/api-routes';
import { IArticleListProps, IArticleProps } from 'models/article';
import axios, { AxiosResponse } from 'axios';
import dayjs from 'dayjs';

export const fetchAllArticles = (): Promise<AxiosResponse> => (
  axios.get(API_ROUTES.ALL_ARTICLES)
);

export const fetchArticle = (articleId?: string): Promise<AxiosResponse> => (
  axios.get(`${API_ROUTES.ARTICLE}/${articleId}`)
);

export const mapAllArticlesResponseToArticleListProps = (response: any): IArticleListProps => {
  if (response.data.documents) {
    const { documents } = response.data;
    const listWithAbsoluteThumbSrc = documents.map((element: any) => ({
      ...element,
      thumbnail: `${API_ROUTES.ROOT}/${element.thumbnail}`,
    }));

    return { articleList: listWithAbsoluteThumbSrc };
  }

  return {articleList: []};
};

export const mapArticleResponseToArticleProps = (response: any): IArticleProps => {
  const { data } = response;
  const { heading, author, body, date, mainImage } = data.elements;
  const { leadImage, leadImageCaption, leadImageCredit } = mainImage.value;
  return {
    name: data.name,
    heading: heading.value,
    author: author.value,
    body: body.values || [],
    date: dayjs(date.value).format('DD-MM-YYYY'),
    leadImage:
      leadImage.renditions
        ? {
            src: `${API_ROUTES.ROOT_WITH_KEY}/${leadImage.renditions.lead.source}`,
            caption: leadImageCaption.value,
            credit: leadImageCredit.value,
          }
        : { src: '', caption: '', credit: '' }
  }
};