import { Link } from 'react-router-dom';
import React from 'react';
import { ROUTES } from 'constants/routes';

export const HomePage: React.FC = () => (
  <div className='home-page'>
    <h1 className='home-page__heading'>Welcome!</h1>
    <p className='home-page__message'>
      Are you looking for: <Link to={ROUTES.ARTICLES} className='home-page__link'>articles</Link>?
    </p>
  </div>
);
