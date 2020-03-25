import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import reactLogo from 'img/react-logo.svg';
import { ROUTES } from 'constants/routes';

export const NavigationBar: React.FC = () => (
  <nav className='navigation-bar'>
    <Link to={ROUTES.INDEX}>
      <img className='navigation-bar__logo' src={reactLogo} alt=''/>
    </Link>
    <ul className='navigation-bar__menu'>
      <li className='navigation-bar__menu-item'>
        <NavLink to={ROUTES.ARTICLES}
                 className='navigation-bar__link'
                 activeClassName='navigation-bar__link--active'>Articles</NavLink>
      </li>
    </ul>
  </nav>
);