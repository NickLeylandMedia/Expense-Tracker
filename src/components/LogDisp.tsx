/* Library Imports */
//React
import React from "react";

/* Stylesheet Imports */
import "../styles/LogDisp.scss";

/* Image Imports */

/* Component Imports */
interface Props {
  expArr: any[];
  fullArr: any[];
  incArr: any[];
  setLogMode: React.Dispatch<React.SetStateAction<boolean>>;
}

/* Component Interfaces */

/* Component/Functions */
const LogDisp: React.FC<Props> = ({ expArr, fullArr, incArr, setLogMode }) => {
  //Logic for Rendering Items
  const revLog = [...fullArr].reverse();
  const shortLog = revLog.slice(0, 5);
  let renderedItems;
  if (fullArr.length > 0) {
    console.log(fullArr);
    renderedItems = shortLog.map(({ Amount, Name, Type, ID }) => {
      if (Type === "Expense") {
        return (
          <div className="logItem">
            <p className="itemName">{Name}</p>
            <p className="itemAmount">-${Amount}</p>
            <button
              onClick={() =>
                console.log(fullArr.findIndex((item) => item.ID === ID))
              }
            ></button>
          </div>
        );
      } else {
        return (
          <div className="logItem">
            <p className="itemName">{Name}</p>
            <p className="itemAmount">+${Amount}</p>
            <button
              onClick={() =>
                console.log(fullArr.findIndex((item) => item.ID === ID))
              }
            >
              Log
            </button>
          </div>
        );
      }
    });
  } else {
    renderedItems = <div>Please add a transaction!</div>;
  }

  //Function return statement
  return (
    <div className="LogDisp bigBox">
      <h1>LogDisp</h1>
      <div className="listBox">{renderedItems}</div>
      <div className="logActions">
        <button className="logButton" onClick={() => setLogMode(true)}>
          View Full Log
        </button>
      </div>
    </div>
  );
};

/* Export Statement */
export default LogDisp;
