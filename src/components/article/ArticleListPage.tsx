import { ArticleList } from 'components/article/ArticleList';
import { IArticleListProps } from 'models/article';
import { compose } from 'lodash/fp';
import { fetchAllArticles, mapAllArticlesResponseToArticleListProps } from 'helpers/article-helpers';
import React from 'react';
import { withAsyncLoading } from 'components/hocs/withAsyncLoading';
import { withRequestError } from 'components/hocs/withRequestError';

export const ArticleListPage: React.FC = () => {
  const articlesRequestPromise = fetchAllArticles();
  const ArticleListWithAsyncLoading = compose(
    withRequestError<IArticleListProps>(articlesRequestPromise),
    withAsyncLoading<IArticleListProps>(articlesRequestPromise)(mapAllArticlesResponseToArticleListProps)
  )(ArticleList);

  return (
    <div className='article-list-page'>
      <ArticleListWithAsyncLoading articleList={[]} />
    </div>
  );
};