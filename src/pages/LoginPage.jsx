import React from 'react';
import { Link } from 'react-router-dom';

export const LoginPage = () => {
  return (
    <div>
      <h1>Login</h1>
      <p>
        or <Link to='/register'>register</Link>
      </p>
    </div>
  );
};
