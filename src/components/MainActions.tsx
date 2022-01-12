/* Library Imports */
//React
import React from "react";

/* Stylesheet Imports */
import "../styles/MainActions.scss";

/* Image Imports */

/* Component Imports */

/* Component Interfaces */
interface Props {
  setIsInput: React.Dispatch<React.SetStateAction<boolean>>;
}

/* Component/Functions */
const MainActions: React.FC<Props> = ({ setIsInput }) => {
  //Function return statement
  return (
    <div className="MainActions">
      <button className="mainButton" onClick={() => setIsInput(true)}>
        ADD INC/EXP
      </button>
    </div>
  );
};

/* Export Statement */
export default MainActions;
