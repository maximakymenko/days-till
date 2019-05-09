import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import { StyledLogout } from 'styles/StyledLogout';
import { FirebaseContext } from '../firebase';

const Logout = ({ history }) => {
  const firebase = useContext(FirebaseContext);

  const logout = () => {
    firebase.auth().signOut();
    history.push('/');
  };

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

Logout.propTypes = {
  history: PropTypes.shape({}).isRequired,
};

export default withRouter(Logout);
