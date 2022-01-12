/* Library Imports */
//React
import React from "react";

/* Stylesheet Imports */
import "../styles/Summary.scss";

/* Image Imports */

/* Component Imports */

/* Component Interfaces */
interface Props {
  expArr: any[];
  incArr: any[];
}

/* Component/Functions */
const Summary: React.FC<Props> = ({ expArr, incArr }) => {
  //Logic for total expenses variable
  let totalExp;
  if (expArr.length > 0) {
    const vals = expArr.map((cur) => cur.Amount);
    totalExp = vals.reduce((prev, cur) => {
      return +prev + +cur;
    });
  } else {
    totalExp = 0;
  }
  //Logic for total income variable
  let totalInc;
  if (incArr.length > 0) {
    const vals = incArr.map((cur) => cur.Amount);
    totalInc = vals.reduce((prev, cur) => {
      return +prev + +cur;
    });
  } else {
    totalInc = 0;
  }
  //Logic for total net variable
  const totalNet = totalInc - totalExp;

  //Function return statement
  return (
    <div className="Summary">
      <div className="row">
        <div className="income summaryBox">
          <h3 className="summaryTitle">Income</h3>
          <p className="summaryFigure">${totalInc}</p>
        </div>
        <div className="expense summaryBox">
          <h3 className="summaryTitle">Expense</h3>
          <p className="summaryFigure">${totalExp}</p>
        </div>
      </div>
      <div className="net summaryBox">
        <h3 className="summaryTitle">Net</h3>
        <p className="summaryFigure">${totalNet}</p>
      </div>
    </div>
  );
};

/* Export Statement */
export default Summary;
