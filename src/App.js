import React, { Component } from "react";
import "./App.css";
import HomePage from "./pages/homepage/HomePage";
import ShopPage from "./pages/shop/Shop";
import { Switch, Route } from "react-router-dom";
import Header from "./components/header/Header";
import SignInSignUp from "./pages/signin&signup/SignIn-SignUp";
// used to store the state of the user in the app
import { auth, createUserProfileDocument } from "./firebase/firebase.utils";
import { connect } from 'react-redux';
import { setCurrentUser } from './redux/user/user.actions';

class App extends Component {


  // closing subscription once the app unmounts
  unsubscribeFromAuth = null;

  componentDidMount() {
    // onAuthStateChanged is a method that comes with firebase
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {

      if(userAuth) {

        // Getting userRef for an existing user or one that has just been created by google sign in
        const userRef = await createUserProfileDocument(userAuth);

        userRef.onSnapshot(snapshot => {
          this.props.setCurrentUser({
            currentUser: {
              id: snapshot.id,
              ...snapshot.data()
            }
          })
          })
      }
      this.setState({ currentUser: userAuth });
    })
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {
    return (
      <div>
      <Header />

        <Route exact path="/" component={HomePage} />
        <Route exact path="/signup" component={SignInSignUp} />
        <Switch></Switch>
        <Route exact path="/shop" component={ShopPage} />
        <Route exact path="/signin" component={SignInSignUp} />
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  setCurrentUser: user => dispatch(setCurrentUser(user))
})

export default connect(null, mapDispatchToProps)(App);
