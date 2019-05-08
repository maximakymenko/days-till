import React from 'react';
import { StyledForm } from 'styles/StyledForm';
import { theme } from 'styles/GlobalStyle';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { ClipLoader } from 'react-spinners';

function Form({
  onSubmit,
  isLogin,
  title,
  error,
  loading,
  setEmail,
  setPassword,
  buttonTitle,
}) {
  return (
    <>
      <StyledForm onSubmit={onSubmit}>
        <h1>{title}</h1>
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
          {buttonTitle}
          {
            loading ? (
              <ClipLoader
                loading={loading}
                sizeUnit="px"
                size={25}
                color={theme.primaryColorLight}
              />
            ) : null
          }
        </button>
        <div className="error">
          {error || null}
        </div>
        {
          isLogin ? (
            <Link to="/register">I dunno have an account yet</Link>
          ) : null
        }
      </StyledForm>
    </>
  );
}

Form.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  setEmail: PropTypes.func.isRequired,
  setPassword: PropTypes.func.isRequired,
  title: PropTypes.string.isRequired,
  error: PropTypes.string.isRequired,
  loading: PropTypes.bool.isRequired,
  buttonTitle: PropTypes.string.isRequired,
  isLogin: PropTypes.bool,
};

Form.defaultProps = {
  isLogin: false,
};

export default Form;
