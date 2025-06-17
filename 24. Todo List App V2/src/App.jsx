import React, { useState } from "react";
import "./App.css";

function App() {
  const [inputText, setInputText] = useState("");
  const [items, setItems] = useState([]);

  function handleChange(event) {
    const newValue = event.target.value;
    setInputText(newValue);
  }

  function addItem() {
    setItems((prevItem) => {
      return [...prevItem, inputText];
    });
    setInputText("");
  }

  function strikeThrough(e) {
    // strike and unstrike line through using the checkbox
    const li = e.target.parentElement;
    const clickedItem = e.target;
    if (clickedItem.checked) {
      li.style.textDecoration = "line-through";
    } else {
      li.style.textDecoration = "none";
    }
  }

  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      <div className="form">
        <input onChange={handleChange} type="text" value={inputText} />
        <button onClick={addItem}>
          <span>Add</span>
        </button>
      </div>
      <div>
        <ul>
          {items.map((todoItem) => {
            return (
              <>
                <div className="note-row">
                  <div className="note-row-content">
                    <li>{todoItem}</li>
                    <input type="checkbox" onClick={strikeThrough} />
                  </div>
                  <i class="fas fa-band-aid"></i>
                </div>
              </>
            );
          })}
        </ul>
      </div>
    </div>
  );
}

export default App;
