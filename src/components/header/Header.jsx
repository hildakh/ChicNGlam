import React from "react";
import { Link } from "react-router-dom";
import "./Header.styles.scss";
import { ReactComponent as Logo } from "../../assets/original.svg";
import { auth } from '../../firebase/firebase.utils';
import { connect } from 'react-redux';

const Header = ({ currentUser }) => (
  <div className="header">
    <Link className="logo-container" to="/">
      <Logo className="logo" />
    </Link>

    <div className="options">
      <Link className="option" to="/shop">Shop</Link>
      <Link className="option" to="/contact">Contact</Link>
      {currentUser ?
        <div className="option" onClick={() => auth.signOut()}>Sign Out</div>
      :
      <Link className="option" to="/signin">Sign in</Link>
      }
    </div>
  </div>
);

//function giving access to state > root.reducer
const mapStateToProps = (state) => ({
  currentUser: state.user.currentUser
})
export default connect(mapStateToProps)(Header);
