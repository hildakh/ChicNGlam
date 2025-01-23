import React, { Component } from "react";
import "./App.css";

import Header from "./components/header/Header";

import HomePage from "./pages/homepage/HomePage";
import ShopPage from "./pages/shop/Shop";
import { Routes, Route, Navigate } from "react-router-dom";
import SignInSignUp from "./pages/signin&signup/SignIn-SignUp";
import CheckoutPage from './pages/checkout/CheckoutPage';

// used to store the state of the user in the app
import { auth, createUserProfileDocument } from "./firebase/firebase.utils";
import { connect } from "react-redux";
import { setCurrentUser } from "./redux/user/user.actions";
import { selectCurrentUser } from './redux/user/user.selectors';
import { createStructuredSelector } from 'reselect';

class App extends Component {
  // closing subscription once the app unmounts
  unsubscribeFromAuth = null;

  componentDidMount() {
    const { setCurrentUser } = this.props;
    // onAuthStateChanged is a method that comes with firebase
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      if (userAuth) {
        // Getting userRef for an existing user or one that has just been created by google sign in
        const userRef = await createUserProfileDocument(userAuth);

        //whenever the usersnapshot updates, we set the userReducer value with the new object
        userRef.onSnapshot(snapshot => {
          setCurrentUser({
            id: snapshot.id,
            ...snapshot.data()
          });
        });
      }
      setCurrentUser(userAuth);
    });
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {
    return (
      <div>
        <Header />

        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/signup" element={() => this.props.currentUser ? (<Navigate to='/'/>) : (<SignInSignUp />)} />
          <Route path="/shop/*" element={<ShopPage />} />
          <Route path="/signin" element={() => this.props.currentUser ? (<Navigate to='/'/>) : (<SignInSignUp />)} />
          <Route path="/checkout" element={<CheckoutPage />} />
        </Routes>
      </div>
    );
  }
}

//getting the userReducer off of state
const mapStateToProps = createStructuredSelector ({
  currentUser: selectCurrentUser
});

const mapDispatchToProps = dispatch => ({
  setCurrentUser: user => dispatch(setCurrentUser(user))
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
