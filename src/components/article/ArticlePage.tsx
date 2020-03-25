import { Article } from 'components/article/Article';
import { IArticleProps } from 'models/article';
import { compose } from 'lodash/fp';
import { fetchArticle, mapArticleResponseToArticleProps } from 'helpers/article-helpers';
import { useParams } from 'react-router-dom';
import React from 'react';
import { withAsyncLoading } from 'components/hocs/withAsyncLoading';
import { withRequestError } from 'components/hocs/withRequestError';

const defaultArticleProps = {
  name: '',
  heading: '',
  date: '',
  author: '',
  leadImage: {
    src: '',
    caption: '',
    credit: '',
  },
  body: [],
};

export const ArticlePage = () => {
  const { id } = useParams();
  const articleRequestPromise = fetchArticle(id);
  const ArticleWithAsyncLoading = compose(
    withRequestError<IArticleProps>(articleRequestPromise),
    withAsyncLoading<IArticleProps>(articleRequestPromise)(mapArticleResponseToArticleProps)
  )(Article);

  return (
    <div className='article-page'>
      <ArticleWithAsyncLoading { ...defaultArticleProps }/>
    </div>
  );

};
