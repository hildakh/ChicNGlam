import React, { useState } from "react";
import {
  createUserProfileDocument,
  createAuthUserWithEmailAndPassword,
} from "../../utils/firebase/firebase.utils";
import FormInput from "../form-input/FormInput";
import CustomButton from "../custom-button/CustomButton";
import "./SignUp.styles.scss";

const defaultFormFields = {
  displayName: "",
  email: "",
  password: "",
  confirmPassword: ""
};

const SignUp = () => {
  const [formFields, setFormFields] = useState(defaultFormFields);
  const { displayName, email, password, confirmPassword } = formFields;

  const resetFormFields = () => {
    setFormFields(defaultFormFields);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (password !== confirmPassword) {
      alert("Passwords don't match");
      return;
    }

    try {
      // creates a userAuth object with a given email and password
      const { user } = await createAuthUserWithEmailAndPassword(
        email,
        password
      );

      // Adding the user to firestore docs
      await createUserProfileDocument(user, { displayName });

      resetFormFields();
    } catch (error) {
      if (error.code === "auth/email-already-in-use") {
        alert("Cannot create user. Email already in use");
      } else {
        console.log("Error creating the user", error);
      }
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormFields(prevState => ({
      ...prevState,
      [name]: value,
    }));
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
          value={formFields.displayName}
          label="Display Name"
          required
        />

        <FormInput
          type="email"
          name="email"
          handleChange={handleChange}
          value={formFields.email}
          label="Email"
          required
        />

        <FormInput
          type="password"
          name="password"
          handleChange={handleChange}
          value={formFields.password}
          label="Password"
          required
        />

        <FormInput
          type="password"
          name="confirmPassword"
          handleChange={handleChange}
          value={formFields.confirmPassword}
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
