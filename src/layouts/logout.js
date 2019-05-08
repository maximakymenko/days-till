import React, { useContext } from 'react';
import { StyledLogout } from 'styles/StyledLogout';
import { FirebaseContext } from '../firebase';

const Logout = () => {
  const firebase = useContext(FirebaseContext);

  const logout = () => firebase.signOut();

  return (
    <StyledLogout>
      <h1>Are you sure, sir, you wanna logout ?</h1>
      <button
        type="button"
        onClick={logout}
      >
        Logout
      </button>
    </StyledLogout>
  );
};

export default Logout;
