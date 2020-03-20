import React, { Component } from "react";
import "./SignIn.styles.scss";

class SignIn extends Component {
  constructor() {
    super();

    this.state = {
      email: "",
      password: ""
    };
  }

  render() {
    return (
      <div className="signin">
        <h3>I already have an account</h3>
        <span>Sign in with your email and password</span>
        <form>
          <label>Email</label>
          <input type="email" name='email' value={this.state.email} required />
          <label>Password</label>
          <input type='password' name='password' value={this.state.password} required />

          <input type='submit' value='Submit Form' />
        </form>
      </div>
    );
  }
}

export default SignIn;