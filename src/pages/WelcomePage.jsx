import React from 'react';
import { Navigate } from 'react-router-dom';

export const WelcomePage = () => {
  return (
    <div>
      <h1>Welcome to your photo gallery</h1>
      <p>
        please, login <Navigate to='./login ' />{' '}
      </p>
    </div>
  );
};
