import React, { Component } from "react";
import { createStructuredSelector } from 'reselect';
import { onSnapshot } from 'firebase/firestore';
import { onAuthStateChanged } from 'firebase/auth';

import "./App.css";
import Header from "./components/header/Header";
import HomePage from "./routes/homepage/HomePage";
import ShopPage from "./routes/shop/Shop";
import { Routes, Route } from "react-router-dom";
import SignInSignUp from "./routes/signin&signup/SignIn-SignUp";
import CheckoutPage from './routes/checkout/CheckoutPage';

// used to store the state of the user in the app
import { auth, createUserProfileDocument } from "./utils/firebase/firebase.utils";
import { connect } from "react-redux";
import { setCurrentUser } from "./redux/user/user.actions";
import { selectCurrentUser } from './redux/user/user.selectors';

class App extends Component {
  // closing subscription once the app unmounts
  unsubscribeFromAuth = null;

  componentDidMount() {
    const { setCurrentUser } = this.props;

    // onAuthStateChanged is a method that comes with firebase
    this.unsubscribeFromAuth = onAuthStateChanged(auth, async userAuth => {
      if (userAuth) {
        // Getting userRef for an existing user or one that has just been created by google sign in
        const userRef = await createUserProfileDocument(userAuth);

        //whenever the usersnapshot updates, we set the userReducer value with the new object
        onSnapshot(userRef, snapshot => {
          setCurrentUser({
            id: snapshot.id,
            ...snapshot.data()
          });
        });
      } else {
        setCurrentUser(userAuth);
      }
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
          <Route path="/signup" element={this.props.currentUser ? (<HomePage />) : (<SignInSignUp />)} />
          <Route path="/shop/*" element={<ShopPage />} />
          <Route path="/signin" element={this.props.currentUser ? (<HomePage />) : (<SignInSignUp />)} />
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
