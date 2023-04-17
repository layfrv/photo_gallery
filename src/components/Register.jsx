import React from 'react';
import { Form } from './Form';
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth';

export const Register = () => {
  const handleRegister = (email, password) => {
    const auth = getAuth();
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
      });
  };

  return <Form title="Register" handleClick={handleRegister} afterForm="login" />;
};
