import React from 'react';
import { Navigate } from 'react-router-dom';

export const WelcomePage = () => {
  return (
    <div>
      <h1>Welcome to your photo gallery</h1>
      <p>
        If you have an account, <a href="./login">Login</a> or <a href="/register">Authorize</a>
      </p>
    </div>
  );
};
