import React from "react";
import ReactDOM from "react-dom";
import "./App.css";
/* import cars from "./data/cars"; */
import BrandTable from "./components/brandTable";

function App() {

/*   // destructure car array into honda and tesla
  const [honda, tesla] = cars;
  // destructure nested objects and arrays
  const {model: hondaModel, speedStats: {topSpeed: hondaTopSpeed }, coloursByPopularity: [hondaTopColour]} = honda;
  const {model: teslaModel, speedStats: {topSpeed: teslaTopSpeed}, coloursByPopularity: [teslaTopColour]} = tesla; */

  return (
    <>
      <BrandTable />
      {/* <table>
        <tr>
          <th>Brand</th>
          <th>Top Speed</th>
        </tr>
        <tr>
          <td>{hondaModel}</td>
          <td>{hondaTopSpeed}</td>
          <td>{hondaTopColour}</td>
        </tr>
        <tr>
          <td>{teslaModel}</td>
          <td>{teslaTopSpeed}</td>
          <td>{teslaTopColour}</td>
        </tr>
      </table> */}
    </>
  );
}

export default App;