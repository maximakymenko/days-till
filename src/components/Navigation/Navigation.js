import React, { useState, useContext, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { StyledNavigation } from 'styles/StyledNavigation';
import { FirebaseContext } from '../../firebase';

import Header from '../Header';

const Navigation = () => {
  const firebase = useContext(FirebaseContext);
  const [user, setUser] = useState(null);

  useEffect(() => {
    const listener = () => firebase.auth().onAuthStateChanged(authUser => setUser(authUser));

    return listener();
  });

  return (
    <>
      <StyledNavigation>
        <NavLink exact to="/">Home</NavLink>
        {
          user ? (
            <>
              <NavLink to="/favorite">Favorite</NavLink>
              <NavLink to="/logout">Logout</NavLink>
            </>
          ) : (
            <NavLink to="/login">Login</NavLink>
          )
        }
      </StyledNavigation>
      <Header />
    </>
  );
};

export default Navigation;
