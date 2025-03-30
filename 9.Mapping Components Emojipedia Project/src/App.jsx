import React from "react";
import "./App.css";
import EmojiCard from "./components/EmojiCard";

function App() {
  return (
    <>
      <h1>
        <span>emojipedia</span>
      </h1>
      <div className="emoji-container">
        <EmojiCard />
      </div>
    </>
  );
}

export default App;
