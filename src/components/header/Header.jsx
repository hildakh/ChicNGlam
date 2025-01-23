import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { createStructuredSelector } from 'reselect';

import { auth } from "../../firebase/firebase.utils";
import CartIcon from "../cart-icon/CartIcon";
import CartDropdown from "../cart-dropdown/Cart-Dropdown";
import { selectCartHidden } from '../../redux/cart/cart.selectors';
import { selectCurrentUser } from '../../redux/user/user.selectors';
import "./Header.styles.scss";

const Header = ({ currentUser, hidden }) => (
  <div className="header">
    <Link className="logo-container" to="/">
    </Link>

    <div className="options">
      <Link className="option" to="/shop">
        Shop
      </Link>
      <Link className="option" to="/contact">
        Contact
      </Link>
      {currentUser ? (
        <div className="option" onClick={() => auth.signOut()}>
          Sign Out
        </div>
      ) : (
        <Link className="option" to="/signin">
          Sign in
        </Link>
      )}

      <CartIcon />
    </div>
    {!hidden && <CartDropdown />}
  </div>
);

/*function giving access to state > root.reducer
Instead of repeatedly passing the state to each function for selectors we can use createStructuredSelector used below

const mapStateToProps = state => ({
  currentUser: selectCurrentUser(state),
  hidden: selectCartHidden(state)
});
*/

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
  hidden: selectCartHidden
})

export default connect(mapStateToProps)(Header);
