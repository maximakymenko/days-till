import React from 'react';
import Clock from './Clock';
import { StyledHeader } from '../styles/StyledHeader';

const Header = () => (
  <StyledHeader>
    <h1>
      Movie timer
      <Clock />
    </h1>
  </StyledHeader>
);

export default Header;
