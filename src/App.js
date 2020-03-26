import React, { Component } from "react";
import "./App.css";
import HomePage from "./pages/homepage/HomePage";
import ShopPage from "./pages/shop/Shop";
import { Switch, Route } from "react-router-dom";
import Header from "./components/header/Header";
import SignInSignUp from "./pages/signin&signup/SignIn-SignUp";
// used to store the state of the user in the app
import { auth, createUserProfileDocument } from "./firebase/firebase.utils";

class App extends Component {
  constructor() {
    super();

    this.state = {
      currentUser: null
    }
  }

  // closing subscription once the app unmounts
  unsubscribeFromAuth = null;

  componentDidMount() {
    // onAuthStateChanged is a method that comes with firebase
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {

      if(userAuth) {

        const userRef = await createUserProfileDocument(userAuth);

        userRef.onSnapshot(snapshot => {
          this.setState({
            currentUser: {
              id: snapshot.id,
              ...snapshot.data()
            }
          }, () => {
            console.log(this.state)
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
      <Header currentUser={this.state.currentUser}/>

        <Route exact path="/" component={HomePage} />
        <Route exact path="/signup" component={SignInSignUp} />
        <Switch></Switch>
        <Route exact path="/shop" component={ShopPage} />
        <Route exact path="/signin" component={SignInSignUp} />
      </div>
    );
  }
}

export default App;
