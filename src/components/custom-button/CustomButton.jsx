import React from "react";

import "./CustomButton.styles.scss";

const CustomButton = ({ children, isGoogleSignIn, inverted, ...otherProps }) => (
  // making the button reusable for different purposes. Children would be the text showing on the button
  <button
    className= {`${inverted ? 'inverted' : ''}${isGoogleSignIn ? 'google-sign-in' : ''} custom-button`}
    {...otherProps}
  >
    {children}
  </button>
);

export default CustomButton;