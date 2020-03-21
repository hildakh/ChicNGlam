import React from "react";
import "./App.css";
import HomePage from "./pages/homepage/HomePage";
import ShopPage from './pages/shop/Shop';
import { Switch, Route } from "react-router-dom";
import Header from "./components/header/Header";
import SignInSignUp from "./pages/signin&signup/SignIn-SignUp";


function App() {
  return (
    <div>
      <Header />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/shop" component={ShopPage} />
        <Route exact path='/signup' component={SignInSignUp} />
        <Route exact path='/signin' component={SignInSignUp} />
      </Switch>
    </div>
  );
}

export default App;
