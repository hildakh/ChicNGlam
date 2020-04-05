import React from 'react';

import CustomButton from '../custom-button/CustomButton';

import './Cart-Dropdown.styles.scss';

const Cart = () => (
  <div className="cart-dropdown">
    <div className='cart-items' />
    <CustomButton>GO TO CART</CustomButton>
  </div>
)