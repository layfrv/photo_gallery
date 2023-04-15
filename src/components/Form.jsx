import { React, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './form.css';
import { ReactComponent as eyeClosed } from '../assets/eye-closed.svg';
import { ReactComponent as eyeOpen } from '../assets/eye-open.svg';

export const Form = ({ title, handleClick }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordType, setPasswordType] = useState('password');
  const [emailDirty, setEmailDirty] = useState(false);
  const [passwordDirty, setPasswordDirty] = useState(false);
  const [emailError, setEmailError] = useState('Email field is empty');
  const [passwordError, setPasswordError] = useState('Password field is empty');
  const [formValid, setFormValid] = useState(false);

  useEffect(() => {
    if (emailError || passwordError) {
      setFormValid(false);
    } else {
      setFormValid(true);
    }
  }, [emailError, passwordError]);

  const blurHandler = (e) => {
    // eslint-disable-next-line default-case
    switch (e.target.name) {
      case 'email':
        setEmailDirty(true);
        break;
      case 'password':
        setPasswordDirty(true);
        break;
    }
  };

  const emailHandler = (e) => {
    setEmail(e.target.value);
    const re =
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (!re.test(String(e.target.value).toLowerCase())) {
      setEmailError('Email is not correct');
    } else {
      setEmailError('');
    }
  };

  const passwordHandler = (e) => {
    setPassword(e.target.value);
    if (e.target.value.length < 4 || e.target.value.length > 8) {
      setPasswordError('min length: 4, max length: 5');
      if (!e.target.value) {
        setPasswordError('Password field is empty');
      }
    } else {
      setPasswordError('');
    }
  };

  const passwordToggle = () => {
    if (passwordType === 'text') {
      setPasswordType('password');
      return;
    } else {
      setPasswordType('text');
    }
  };

  return (
    <>
      <form className='form'>
        <h1>Sign Up</h1>
        <div className='email_input'>
          <input
            onChange={(e) => emailHandler(e)}
            value={email}
            className='email'
            onBlur={blurHandler}
            name='email'
            type='text'
            placeholder='Enter your email'
          />
        </div>
        {emailDirty && emailError && <div className='errorMsg'>{emailError}</div>}
        <div className='password_input'>
          <input
            onChange={(e) => passwordHandler(e)}
            value={password}
            maxLength={8}
            className='password'
            onBlur={blurHandler}
            name='password'
            type={passwordType}
            placeholder='Enter password (4 - 8 symbols)'
          />
          <div className='eye_icon_container'>
            {passwordType === 'password' ? (
              <img className='eye_icon' src={eyeClosed} alt='eye' onClick={passwordToggle} />
            ) : (
              <img className='eye_icon' src={eyeOpen} alt='eye' onClick={passwordToggle} />
            )}
          </div>
        </div>
        {passwordDirty && passwordError && <div className='errorMsg'>{passwordError}</div>}

        <button disabled={!formValid} className='sbmtBtn' type='submit' onClick={handleClick}>
          {title}
        </button>
      </form>
    </>
  );
};
