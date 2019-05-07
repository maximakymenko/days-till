import React, { useState, useContext } from 'react';
import { StyledForm } from 'styles/StyledForm';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import { ClipLoader } from 'react-spinners';
import { FirebaseContext } from '../firebase';

const Register = ({ history }) => {
  const firebase = useContext(FirebaseContext);

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [loading, setLoading] = useState(false);

  const onSubmit = (event) => {
    event.preventDefault();
    firebase
      .createUser(email, password)
      .then(() => {
        setEmail('');
        setPassword('');
        setLoading(true);
        history.push('/');
      })
      .catch((error) => {
        setErrorMessage(error.message);
      })
      .finally(() => setLoading(false));
  };

  return (
    <>
      <StyledForm onSubmit={onSubmit}>
        <h1>Create an account</h1>
        <input
          onChange={event => setEmail(event.target.value)}
          id="useState"
          type="email"
          placeholder="Your email, sir"
        />
        <input
          onChange={event => setPassword(event.target.value)}
          id="password"
          type="password"
          placeholder="Password"
        />
        <button
          type="submit"
        >
          Create
          <ClipLoader
            loading={loading}
          />
        </button>
        {errorMessage || null}
      </StyledForm>
    </>
  );
};

Register.propTypes = {
  history: PropTypes.shape({}).isRequired,
};

export default withRouter(Register);
