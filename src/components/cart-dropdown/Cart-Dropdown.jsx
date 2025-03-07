import React, { useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { connect } from "react-redux";
import CartItem from "../cart-item/CartItem";
import { selectCartItems } from "../../redux/cart/cart.selectors";
import { toggleCartHidden } from "../../redux/cart/cart.actions";
import { createStructuredSelector } from "reselect";
import { withRouter } from "../../helpers/with-router";
import CustomButton from "../custom-button/CustomButton";
import "./Cart-Dropdown.styles.scss";

const CartDropdown = ({ cartItems, dispatch }) => {
  const navigate = useNavigate();
  const dropdownRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if(dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        dispatch(toggleCartHidden());
      }
    };

    document.addEventListener('mousedown', handleClickOutside);

    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [dispatch]);

  return (
    <div ref={dropdownRef} className="cart-dropdown">
      <div className="cart-items">
        {cartItems.length ? (
          cartItems.map((cartItem) => (
            <CartItem key={cartItem.id} item={cartItem} />
          ))
        ) : (
          <span className="empty-message">Your cart is empty</span>
        )}
      </div>

      <CustomButton
        onClick={() => {
          navigate("/checkout");
          dispatch(toggleCartHidden());
        }}
      >
        GO TO CHECKOUT
      </CustomButton>

    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems,
});

//Connect passes dispatch to component as prop if we do not supply a 2nd argument to connect
export default withRouter(connect(mapStateToProps)(CartDropdown));
