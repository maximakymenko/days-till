import React from 'react';
import { Link } from 'react-router-dom';
// import { FirebaseContext } from '../firebase';

function SignIn() {
  // const firebase = useContext(FirebaseContext);

  return (
    <>
      <div>
        I have access to Firebase and render something.
      </div>
      <Link to="/register">I dunno have account yet</Link>
    </>
  );
}

export default SignIn;
