import React from "react";

import StripeCheckout from "react-stripe-checkout";

const StripeButton = ({ price, onPaymentSuccess }) => {
  const priceForStripe = price * 100;
  const publishableKey = "pk_test_KhDWF72ASDt9sV3lhLraQPOT00RuwUmA4u";

  const onToken = () => {
    onPaymentSuccess();
  };

  return (
    <StripeCheckout
      label="Pay Now"
      name="ChicNGlam Unique Clothing"
      billingAddress
      shippingAddress
      image=""
      description={`Your total is $${price}`}
      amount={priceForStripe}
      token={onToken}
      stripeKey={publishableKey}
    />
  );
};

export default StripeButton;
