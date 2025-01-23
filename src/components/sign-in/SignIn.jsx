import React, { useState } from "react";
import FormInput from "../form-input/FormInput";
import CustomButton from "../custom-button/CustomButton";
import "./SignIn.styles.scss";

import { signInWithGoogle, auth } from "../../firebase/firebase.utils";

const SignIn = () => {
  const [state, setState] = useState({
    email: "",
    password: ""
  });

  const handleSubmit = async event => {
    event.preventDefault();
    const { email, password } = state;

    try {
      await auth.signInWithEmailAndPassword(email, password)
      setState({ email: "", password: "" });
    } catch (error) {
      console.log('Email or password is incorrect. Try again.')
    }
  };

  const handleChange = event => {
    const { name, value } = event.target;
    setState({ [name]: value });
  };

  return (
    <div className="sign-in">
      <h3 className='title'>I already have an account</h3>
      <span>Sign in with your email and password</span>
      <form className='sign-up-form' onSubmit={handleSubmit}>
        <FormInput
          type="email"
          name="email"
          handleChange={handleChange}
          value={state.email}
          label="email"
          required
        />

        <FormInput
          type="password"
          name="password"
          handleChange={handleChange}
          value={state.password}
          label="password"
          required
        />
        <div className="buttons">
          <CustomButton type="submit">Sign In</CustomButton>

          <CustomButton onClick={signInWithGoogle} isGoogleSignIn>
            Sign in with Google
          </CustomButton>
        </div>
      </form>
    </div>
  );
}

export default SignIn;
