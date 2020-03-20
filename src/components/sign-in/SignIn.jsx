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
          <input type="email" name='email' value={this.state.email} required onChange={this.state.handleChange}/>
          <label>Password</label>
          <input type='password' name='password' value={this.state.password} required onChange={this.state.handleChange}/>

          <input type='submit' value='Submit Form' />
        </form>
      </div>
    );
  }
}

export default SignIn;