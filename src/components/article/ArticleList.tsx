import { ArticleCard } from 'components/article/ArticleCard';
import { IArticleListProps } from "models/article";
import { ErrorMessage } from 'components/error/ErrorMessage';
import { Link } from "react-router-dom";
import React from 'react';
import { ROUTES } from 'constants/routes';

export const ArticleList: React.FC<IArticleListProps> = ({ articleList }) => (
  <React.Fragment>
    { articleList.length > 0
        ? articleList.map((article) => (
          <Link key={article.id} to={`${ROUTES.ARTICLES}/${article.id}`}>
            <ArticleCard
              name={article.name}
              thumbnailSrc={article.thumbnail}
            />
          </Link>
        ))

        : <ErrorMessage message='No articles found'/>
    }
  </React.Fragment>
);