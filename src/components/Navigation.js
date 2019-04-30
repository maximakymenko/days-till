import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import { StyledNavigation } from '../styles/StyledNavigation';
import Header from './Header';

const Navigation = () => (
  <Fragment>
    <Header />
    <StyledNavigation>
      <Link to="/">Home</Link>
      <Link to="/favorite">Favorite</Link>
    </StyledNavigation>
  </Fragment>
);

export default Navigation;
