import React from 'react';
import { ArticlePage } from 'components/article/ArticlePage';
import { ArticleListPage } from 'components/article/ArticleListPage';
import { ErrorMessage } from 'components/error/ErrorMessage';
import { Route, Switch } from 'react-router-dom';
import { HomePage } from 'components/home/HomePage';
import { NavigationBar } from 'components/navigation/NavigationBar';
import { ROUTES } from 'constants/routes';
import 'styles/index.scss';

export const App: React.FC = () => (
  <div className='app'>
    <NavigationBar />
    <div className='app__content'>
      <Switch>
        <Route exact path={ROUTES.INDEX} component={HomePage}/>
        <Route exact path={ROUTES.ARTICLES} component={ArticleListPage}/>
        <Route path={`${ROUTES.ARTICLES}/:id`} component={ArticlePage} />
        <Route render={() => <ErrorMessage message='Page not found' /> }/>
      </Switch>
    </div>
  </div>
);