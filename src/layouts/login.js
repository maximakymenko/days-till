import React, { useState, useContext } from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import Form from 'components/Form';
import { FirebaseContext } from '../firebase';


const Login = ({ history }) => {
  const firebase = useContext(FirebaseContext);

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [loading, setLoading] = useState(false);

  const onSubmit = (event) => {
    event.preventDefault();
    setLoading(true);
    firebase
      .loginWithEmailAndPassword(email, password)
      .then(() => {
        setEmail('');
        setPassword('');
        history.push('/');
        setLoading(false);
      })
      .catch((error) => {
        setErrorMessage(error.message);
        setLoading(false);
      });
  };

  return (
    <Form
      onSubmit={onSubmit}
      error={errorMessage}
      loading={loading}
      setEmail={setEmail}
      setPassword={setPassword}
      isLogin
      title="Login"
      buttonTitle="Login"
    />
  );
};

Login.propTypes = {
  history: PropTypes.shape({}).isRequired,
};

export default withRouter(Login);
