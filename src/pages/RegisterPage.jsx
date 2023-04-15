import React from 'react';
import { Link } from 'react-router-dom';

export const RegisterPage = () => {
  return (
    <div>
      <h1>RegisterPage</h1>
      <p>
        Already have an account? <Link to='/login'>Sign In</Link>
      </p>
    </div>
  );
};
