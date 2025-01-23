import React, { useState } from "react";
import FormInput from "../form-input/FormInput";
import CustomButton from "../custom-button/CustomButton";

import { auth, createUserProfileDocument } from "../../firebase/firebase.utils";

import "./SignUp.styles.scss";

const SignUp = () => {
  const [state, setState] = useState({
    displayName: "",
    email: "",
    password: "",
    confirmPassword: ""
  });

  const handleSubmit = async (event) => {
    event.preventDefault();

    const { displayName, email, password, confirmPassword } = state;

    if (state.password !== confirmPassword) {
      alert("Passwords don't match");
      return;
    }

    try {
      // creates a userAuth object with a given email and password
      const { user } = await auth.createUserWithEmailAndPassword(
        email,
        password
      );

      // Adding the user to firestore docs
      await createUserProfileDocument(user, { displayName });

      setState({
        displayName: "",
        email: "",
        password: "",
        confirmPassword: ""
      })
    } catch (error) {
      console.log("Error creating the user", error);
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setState({ [name]: value });
  };

  return (
    <div className="sign-up">
      <h3 className="title">I do not have an account</h3>
      <span>Sign up with your email and password</span>
      <form className="sign-up-form" onSubmit={handleSubmit}>
        <FormInput
          type="text"
          name="displayName"
          handleChange={handleChange}
          value={state.displayName}
          label="Display Name"
          required
        />

        <FormInput
          type="email"
          name="email"
          handleChange={handleChange}
          value={state.email}
          label="Email"
          required
        />

        <FormInput
          type="password"
          name="password"
          handleChange={handleChange}
          value={state.password}
          label="Password"
          required
        />

        <FormInput
          type="password"
          name="confirmPassword"
          handleChange={handleChange}
          value={state.confirmPassword}
          label="Confirm Password"
          required
        />
        <div className="buttons">
          <CustomButton type="submit">Sign Up</CustomButton>
        </div>
      </form>
    </div>
  );
}

export default SignUp;
