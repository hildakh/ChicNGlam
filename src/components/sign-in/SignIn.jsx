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
      <div className="signin">
        <h3>I already have an account</h3>
        <span>Sign in with your email and password</span>
        <form onSubmit={this.handleSubmit}>

          <label>Email</label>
          <FormInput
          type="email"
          name='email'
          onChange={this.state.handleChange}
          value={this.state.email}
          required
          />

          <label>Password</label>
          <FormInput
          type='password'
          name='password'
          onChange={this.state.handleChange}
          value={this.state.password}
          required
          />


          <input type='submit' value='Submit Form' />
        </form>
      </div>
    );
  }
}

export default SignIn;