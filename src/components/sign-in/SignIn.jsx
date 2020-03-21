import React, { Component } from "react";
import FormInput from '../form-input/FormInput';
import "./SignIn.styles.scss";

class SignIn extends Component {
  constructor() {
    super();

    this.state = {
      email: "",
      password: ""
    };
  }

  handleSubmit = (event) => {
    event.preventDefault();
    this.setState({ email: '', password: ''});
  }

  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  }

  render() {
    return (
      <div className="sign-in">
        <h3>I already have an account</h3>
        <span>Sign in with your email and password</span>
        <form onSubmit={this.handleSubmit}>

          <FormInput
          type="email"
          name='email'
          handleChange={this.handleChange}
          value={this.state.email}
          label='email'
          required
          />

          <FormInput
          type='password'
          name='password'
          handleChange={this.handleChange}
          value={this.state.password}
          label='password'
          required
          />

          <input type='submit' value='Submit Form' />
        </form>
      </div>
    );
  }
}

export default SignIn;