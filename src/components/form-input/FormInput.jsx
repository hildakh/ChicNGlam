import React from 'react';

import './FormInput.styles.scss';

const FormInput = ({ handleChange, label, ...otherProps}) => (
  <div className='group'>
    <input className='form-input' onChange={handleChange} {...otherProps} />
  {
    //if we want to pass a label property, it will be created, otherwise no label will be assigned to the input field
    label ?
    <label>
    </label>
    : null
  }
  </div>
)