import React, { Component } from "react";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
  }

  increment = () => {
    this.setState({ count: this.state.count + 1 });
  };

  decrement = () => {
    this.setState({ count: this.state.count - 1 });
  };

  render() {
    return (
      <>
        <h1 style={{ color: "#535bf2" }}>Counter App</h1>
        <div className="counter-component">
          <h1>Counter: {this.state.count}</h1>
          <button onClick={this.increment}>Increment</button>
          <button onClick={this.decrement}>Decrement</button>
          <button onClick={() => this.setState({ count: 0 })}>Reset</button>
        </div>
      </>
    );
  }
}

export default App;
