import React from 'react';
import './SignIn-SignUp.styles.scss';
import SignIn from '../../components/sign-in/SignIn';
import SignUp from '../../components/sign-up/SignUp';

const SignInSignUp = () => (
  <div className='signin-signup'>
  <SignIn />
  <SignUp />
  </div>
)

export default SignInSignUp;