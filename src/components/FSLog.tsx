/* Library Imports */
//React
import React, { useEffect, useRef, useState } from "react";

/* Stylesheet Imports */
import "../styles/FSLog.scss";

/* Image Imports */
import x from "../img/squareX.svg";

/* Component Imports */

/* Component Interfaces */
interface Props {
  expArr: any[];
  fullArr: any[];
  incArr: any[];
  pushFullArr: React.Dispatch<React.SetStateAction<any[]>>;
  setLogMode: React.Dispatch<React.SetStateAction<boolean>>;
}

/* Component/Functions */
const FSLog: React.FC<Props> = ({ fullArr, pushFullArr, setLogMode }) => {
  //State for storing target ID
  const [target, setTarget] = useState<number>(0);

  const isFirstRun = useRef(true);

  //Effect for setting item for deletion
  useEffect(() => {
    if (isFirstRun.current) {
      isFirstRun.current = false;
    } else {
      const proxArr = [...fullArr];

      let index = proxArr.findIndex((item: any) => {
        return +item.ID === target;
      });
      proxArr[index].MFD = true;
      pushFullArr(proxArr);
    }

    console.log(target);
  }, [target]);

  let renderedLog;
  if (fullArr.length > 0) {
    renderedLog = fullArr.map(({ Amount, Name, Type, MFD, ID }) => {
      if (Type === "Expense") {
        if (MFD) {
          return (
            <div className="logItem">
              <p className="itemName">{Name}</p>
              <button className="itemDel" onClick={() => deleteItem(target)}>
                DELETE
              </button>
              <button className="itemDel">CANCEL</button>
            </div>
          );
        } else {
          return (
            <div className="logItem">
              <p className="itemName">{Name}</p>
              <p className="itemAmount">-${Amount}</p>
              <img src={x} onClick={() => setTarget(ID)} alt="" />
            </div>
          );
        }
      } else {
        if (MFD) {
          return (
            <div className="logItem">
              <p className="itemName">{Name}</p>
              <button className="itemDel" onClick={() => deleteItem(target)}>
                DELETE
              </button>
              <button className="itemDel">CANCEL</button>
            </div>
          );
        } else {
          return (
            <div className="logItem">
              <p className="itemName">{Name}</p>
              <p className="itemAmount">+${Amount}</p>
              <img src={x} onClick={() => setTarget(ID)} alt="" />
            </div>
          );
        }
      }
    });
  } else {
    renderedLog = <p>Please add an income or expense!</p>;
  }

  //Item Delete Function
  const deleteItem = (index: number) => {
    const proxArr: any[] = [...fullArr];
    proxArr.splice(index, 1);
    pushFullArr(proxArr);
  };

  //Function return statement
  return (
    <div className="FSLog bigBox">
      <h1>Full Log</h1>
      <div className="listBox">{renderedLog}</div>
      <div className="fullListActions">
        <button className="fullAction" onClick={() => setLogMode(false)}>
          Close Log
        </button>
      </div>
    </div>
  );
};

/* Export Statement */
export default FSLog;
