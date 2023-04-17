import React from 'react';
import { Form } from './Form';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';

export const Login = () => {
  const handleLogin = (email, password) => {
    const auth = getAuth();
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
      });
  };

  return (
    <>
      <Form title="Log in" handleClick={handleLogin} afterForm="register"/>
    </>
  );
};
