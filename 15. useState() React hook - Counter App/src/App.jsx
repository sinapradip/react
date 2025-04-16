import { useState } from "react";
import "./App.css";

/* function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      // write a app that counts the number of times a button is clicked
      <div className="App">
        <h1>Count: {count}</h1>
        <button onClick={() => setCount(count + 1)}>Click me</button>
        <button onClick={() => setCount(count - 1)}>Decrement</button>
        <button onClick={() => setCount(0)}>Reset</button>
    </div>
    </>
  )
} */

function App() {
  const [count, setCount] = useState(7);

  function increment() {
    setCount(count + 1);
  }

  function decrement() {
    setCount(count - 1);
  }
  function reset() {
    setCount(0)
  }

  return (
    <>
      <div className="App">
        <h4>Lets use a counter</h4>
        <h1>Count: {count}</h1>
        <button onClick={increment}>Increase</button>
        <button onClick={decrement}>Decrease</button>
        <button onClick={reset}>Reset</button>
      </div>
    </>
  );
}

export default App;
