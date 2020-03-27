import React, { Component } from "react";
import FormInput from "../form-input/FormInput";
import CustomButton from "../custom-button/CustomButton";

import { auth, createUserProfileDocument } from "../../firebase/firebase.utils";

import "./SignUp.styles.scss";

class SignUp extends Component {
  constructor() {
    super();

    this.state = {
      displayName: "",
      email: "",
      password: "",
      confirmPassword: ""
    };
  }
  handleSubmit = async event => {
    event.preventDefault();

    const { displayName, email, password, confirmPassword } = this.state;

    if (password !== confirmPassword) {
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

      this.setState({
        displayName: "",
        email: "",
        password: "",
        confirmPassword: ""
      })
    } catch (error) {
      console.log("Error creating the user", error);
    }
  };

  handleChange = event => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  render() {
    const { displayName, email, password, confirmPassword } = this.state;
    return (
      <div className="sign-up">
        <h3 className="title">I do not have an account</h3>
        <span>Sign up with your email and password</span>
        <form className="sign-up-form" onSubmit={this.handleSubmit}>
          <FormInput
            type="text"
            name="displayName"
            handleChange={this.handleChange}
            value={displayName}
            label="Display Name"
            required
          />

          <FormInput
            type="email"
            name="email"
            handleChange={this.handleChange}
            value={email}
            label="Email"
            required
          />

          <FormInput
            type="password"
            name="password"
            handleChange={this.handleChange}
            value={password}
            label="Password"
            required
          />

          <FormInput
            type="password"
            name="confirmPassword"
            handleChange={this.handleChange}
            value={confirmPassword}
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
}

export default SignUp;
