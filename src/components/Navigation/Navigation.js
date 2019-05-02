import React from 'react';
import { NavLink } from 'react-router-dom';
import { StyledNavigation } from 'styles/StyledNavigation';

import Header from '../Header';

const Navigation = () => (
  <>
    <StyledNavigation>
      <NavLink exact to="/">Home</NavLink>
      <NavLink to="/favorite">Favorite</NavLink>
    </StyledNavigation>
    <Header />
  </>
);

export default Navigation;
