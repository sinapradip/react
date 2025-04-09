import React from "react";
import Login from "./components/LoginForm";
import RegisterForm from "./components/RegisterForm";

var userIsRegistered = false;

function App() {
  return (
    <div className="container">
      {userIsRegistered === true ? <Login /> : <RegisterForm /> }
    </div>
  );
}

export default App;

//Challenge: Without moving the userIsRegistered variable,
//1. Show Login as the button text if userIsRegistered is true.
//Show Register as the button text if userIsRegistered is false.
//2. Only show the Confirm Password input if userIsRegistered is false.
//Don't show it if userIsRegistered is true.
