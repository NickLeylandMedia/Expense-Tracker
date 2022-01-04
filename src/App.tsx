/* Library Imports */
//React
import React from "react";

/* Stylesheet Imports */
import "normalize-scss";
import "./styles/App.scss";

/* Image Imports */

/* Component Imports */
import Summary from "./components/Summary";

/* Component Interfaces */

/* Component/Functions */
const App = () => {
  //Function return statement
  return (
    <div className="App">
      <Summary />
    </div>
  );
};

/* Export Statement */
export default App;
