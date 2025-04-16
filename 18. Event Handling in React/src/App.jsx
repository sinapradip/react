import React, { useState } from "react";
import "./App.css";

function App() {
  const [headingText, setheadingText] = useState("Hello");
  const [isMouseOver, setMouseOver] = useState(false);
  const handleClick = () => {
    setheadingText("Submitted");
  };
  const handleMouseOut = () => {
    setMouseOver(false)
  };
  const handleMouseOver = () => {
    setMouseOver(true);
  };

  return (
    <div className="container">
      <h1>{headingText}</h1>
      <input type="text" placeholder="What's your name?" />
      <button
        onClick={handleClick}
        onMouseOut={handleMouseOut}
        onMouseOver={handleMouseOver}
        style={{ backgroundColor: isMouseOver ? "black" : "white" }}
      >
        Submit
      </button>
    </div>
  );
}

export default App;
