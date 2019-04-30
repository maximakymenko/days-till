import React, { Fragment } from 'react';
import { NavLink } from 'react-router-dom';
import { StyledNavigation } from '../styles/StyledNavigation';
import Header from './Header';

const Navigation = () => (
  <Fragment>
    <StyledNavigation>
      <NavLink exact to="/">Home</NavLink>
      <NavLink to="/favorite">Favorite</NavLink>
    </StyledNavigation>
    <Header />
  </Fragment>
);

export default Navigation;
