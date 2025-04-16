import React from "react";
import cars from "../data/cars";

export default function BrandTable() {
  return (
    <>
      <table>
        <tr>
          <th>Brand</th>
          <th>Top Speed</th>
        </tr>
        {cars.map((car) => {
          const { model, speedStats: { topSpeed }, coloursByPopularity: [topColour] } = car;
          return (
            <tr key={model}>
              <td>{model}</td>
              <td>{topSpeed}</td>
              <td>{topColour}</td>
            </tr>
          );
        })}
      </table>
     
    </>
  );
}
