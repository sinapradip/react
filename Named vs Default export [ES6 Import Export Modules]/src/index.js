import React from "react";
import ReactDOM from "react-dom";

// import pi from "./math" // import with same name as in original file
// importing with different name because import creates a new variable

import piekovalue from "./math";
import { doublePi, triplePi } from "./math";

ReactDOM.render(
  <ul>
    <li>{piekovalue}</li>
    <li>{doublePi()}</li>
    <li>{triplePi()}</li>
  </ul>,
  document.getElementById("root")
);
