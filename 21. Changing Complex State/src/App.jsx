import { useState } from "react";
import "./App.css";

function App() {

  // Using useState to manage complex state
  // The state is an object with two properties: firstName and lastName
  const [fullName, setFullName] = useState({ firstName: "", lastName: "" });

  // The handleChange function updates the state based on the input field that is changed
  // It uses the name attribute of the input field to determine which part of the state to update
  // The function takes the event object as an argument and destructures it to get the name and value
  // It then uses the setFullName function to update the state
  function handleChange(event) {
    const { name, value } = event.target;

    setFullName((prevFullName) => {
      if (name === "fName") {
        return {
          firstName: value,
          lastName: prevFullName.lastName,
        };
      } else if (name === "lName") {
        return {
          firstName: prevFullName.firstName,
          lastName: value,
        };
      }
    });
  }

  return (
    <>
      <div className="container">
        <h1>
          Hello {fullName.firstName} {fullName.lastName}
        </h1>
        <form>
          <input
            onChange={handleChange}
            name="fName"
            placeholder="First Name"
            value={fullName.firstName}
          />
          <input
            onChange={handleChange}
            name="lName"
            placeholder="Last Name"
            value={fullName.lastName}
          />
          <button>Submit</button>
        </form>
      </div>
    </>
  );
}

export default App;
