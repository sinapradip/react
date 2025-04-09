import React from "react";
import Login from "./Login";

var isLoggedIn = true;


function App() {
  return (
    <>
      <div className="container">
        {/* {isLoggedIn === true ? (
          <h1> Hello User</h1>
        ) : (
          <>
            <Login />
          </>
        )} */}

        {/* Using && operator to show conditional rendering */}
        {
          isLoggedIn === true ? <h1>Hello User</h1> : <Login /> 
        }
      </div>
    </>
  );
}

export default App;
