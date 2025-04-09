import React from "react";
import RegisterForm from "./components/RegisterForm";

var userIsRegistered = true;

function App() {
  return (
    <div className="container">
      <RegisterForm isRegistered = {userIsRegistered} />
    </div>
  );
}

export default App;

//Challenge: Without moving the userIsRegistered variable,
//1. Show Login as the button text if userIsRegistered is true.
//Show Register as the button text if userIsRegistered is false.
//2. Only show the Confirm Password input if userIsRegistered is false.
//Don't show it if userIsRegistered is true.
