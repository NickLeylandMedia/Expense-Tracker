/* Library Imports */
//React
import React from "react";

/* Stylesheet Imports */
import "../styles/Summary.scss";

/* Image Imports */

/* Component Imports */

/* Component Interfaces */

/* Component/Functions */
const Summary = () => {
  //Function return statement
  return (
    <div className="Summary">
      <div className="row">
        <div className="income summaryBox">
          <h3 className="summaryTitle">Income</h3>
        </div>
        <div className="expense summaryBox">
          <h3 className="summaryTitle">Expense</h3>
        </div>
      </div>
      <div className="net summaryBox">
        <h3 className="summaryTitle">Net</h3>
      </div>
    </div>
  );
};

/* Export Statement */
export default Summary;
