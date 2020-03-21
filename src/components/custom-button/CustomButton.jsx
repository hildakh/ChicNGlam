import React from "react";

import "./CustomButton.styles.scss";

const CustomButton = ({ children, ...otherProps }) => (
  // making the button reusable for different purposes. Children would be the text showing on the button
  <button className="custom-button" {...otherProps}>
    {children}
  </button>
);

export default CustomButton;