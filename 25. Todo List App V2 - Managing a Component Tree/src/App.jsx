import React, { useState } from "react";
import "./App.css";
import ToDoItem from "./components/ToDoItem";

function App() {
  const [inputText, setInputText] = useState("");
  const [items, setItems] = useState([]);
  const [strikeThrough, setStrikeThrough] = useState(true);

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

  function strike(e) {
    // strike and unstrike line through using the checkbox
    const strikeState = e.target.parentElement.style.textDecoration
    setStrikeThrough(!strikeThrough);
    console.log(strikeThrough);
    if (e.target.parentElement.style.textDecoration == "none") {
      e.target.parentElement.style.textDecoration = "line-through";
    } else {
      e.target.parentElement.style.textDecoration = "none";
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
                    <input type="checkbox" onClick={strike} />
                  </div>
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
