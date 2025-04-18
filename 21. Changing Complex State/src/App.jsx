import { useState } from "react";
import "./App.css";

function App() {
  const [fullName, setFullName] = useState({ firstName: "", lastName: "" });

  function handleChange(event) {
    const { name, value } = event.target;

    setFullName((prevFullName) => {
      if (name === "fName") {
        return {
          firstName: event.target.value,
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
