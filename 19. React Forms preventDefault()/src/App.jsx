import React, { useState } from "react";
import "./App.css";

// change heading text ko Hello, whatever the user types in the input field using useState

function App() {
  const [headingText, setHeadingText] = useState("");
  const [name, setName] = useState("");

  function handleChange(e) {
    setName(e.target.value);
  }

  function handleClick(e) {
    setHeadingText(name);
    // This prevent the default behaviour of form being submitted & refreshing the page
    e.preventDefault();
  }

  return (
    <div className="container">
      <h1> Hello {headingText}</h1>
      <form onSubmit={handleClick}>
        <input
          onChange={handleChange}
          type="text"
          placeholder="What's your name?"
          value={name}
        />
        <button>Submit</button>
      </form>
    </div>
  );
}

export default App;
