import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import CheckoutItem from "../../components/checkout-item/CheckoutItem";
import {
  selectCartItems,
  selectCartTotalPrice,
} from "../../redux/cart/cart.selectors";
import { clearCart } from "../../redux/cart/cart.actions";
import StripeButton from "../../components/stripe-button/StripeButton";
import "./CheckoutPage.styles.scss";

const CheckoutPage = ({
  cartItems,
  total,
  dispatch
}) => {
  const handlePaymentSuccess = () => {
    dispatch(clearCart());
  };

  return (
    <div className="checkout-page">
      <div className="checkout-header">
        <div className="header-block">
          <span>product</span>
        </div>

        <div className="header-block">
          <span>description</span>
        </div>

        <div className="header-block">
          <span>quantity</span>
        </div>

        <div className="header-block">
          <span>price</span>
        </div>

        <div className="header-block">
          <span>remove</span>
        </div>
      </div>
      {cartItems.map((cartItem) => (
        <CheckoutItem key={cartItem.id} cartItem={cartItem} />
      ))}
      <div className="total">
        <span>TOTAL: ${total}</span>
      </div>
      {
        cartItems?.length > 0 && (
          <StripeButton price={total} onPaymentSuccess={handlePaymentSuccess}/>
        )
      }
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems,
  total: selectCartTotalPrice,
});

export default connect(mapStateToProps)(CheckoutPage);
