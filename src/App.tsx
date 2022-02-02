/* Library Imports */
//React
import React, { useEffect, useState } from "react";

/* Module Imports */
import { getAllDocs } from "./modules/FirestoreData";
import { sumArrProps } from "./modules/ArrayActions";

/* Stylesheet Imports */
import "normalize-scss";
import "./styles/App.scss";

/* Image Imports */

/* Component Imports */
import ChartDisp from "./components/ChartDisp";
import Form from "./components/Form";
import FSLog from "./components/FSLog";
import LogDisp from "./components/LogDisp";
import MainActions from "./components/MainActions";
import Summary from "./components/Summary";

/* Component Interfaces */

/* Component/Functions */
const App = () => {
  //State to store count
  const [count, setCount] = useState<number>(0);
  //State to store ALL Items
  const [fullArr, pushFullArr] = useState<any[]>([]);
  //State to store Income Items
  const [incArr, pushIncArr] = useState<any[]>([]);
  //State to store Expense Items
  const [expArr, pushExpArr] = useState<any[]>([]);
  //State to store Application State
  const [isInput, setIsInput] = useState<boolean>(false);
  //State to store if application is in Log Mode
  const [logMode, setLogMode] = useState<boolean>(false);
  //State to store raw total
  const [rawTotal, setRawTotal] = useState<number>(0);
  //State to store raw total Income
  const [rawIncome, setRawIncome] = useState<number>(0);
  //State to store raw total Expense
  const [rawExpense, setRawExpense] = useState<number>(0);

  //Effect to sort data
  useEffect(() => {
    if (fullArr.length) {
      const incomes: any[] = fullArr.filter((item) => item.Type === "Income");
      const expenses: any[] = fullArr.filter((item) => item.Type === "Expense");
      pushIncArr(incomes);
      pushExpArr(expenses);
    }
  }, [fullArr]);

  //Effect to update raw values
  useEffect(() => {
    let expNum;
    let incNum;
    //Expense
    if (expArr.length > 1) {
      expNum = sumArrProps(expArr, "Amount");
      setRawExpense(+expNum);
    } else if (expArr.length === 1) {
      expNum = expArr[0].Amount;
      setRawExpense(+expNum);
    } else {
      expNum = 0;
      setRawExpense(+expNum);
    }

    //Income
    if (incArr.length > 1) {
      incNum = sumArrProps(incArr, "Amount");
      setRawIncome(+incNum);
    } else if (incArr.length === 1) {
      incNum = incArr[0].Amount;
      setRawIncome(+incNum);
    } else {
      incNum = 0;
      setRawIncome(+incNum);
    }

    //Total
    const totNum = +expNum + +incNum;
    setRawTotal(totNum);
  }, [expArr, incArr]);

  //Function return statement
  if (logMode) {
    return (
      <div className="App">
        <FSLog
          expArr={expArr}
          fullArr={fullArr}
          incArr={incArr}
          pushFullArr={pushFullArr}
          setLogMode={setLogMode}
        />
      </div>
    );
  }
  if (isInput) {
    return (
      <div className="App">
        <Form
          fullArr={fullArr}
          pushFullArr={pushFullArr}
          setIsInput={setIsInput}
          count={count}
          setCount={setCount}
        />
      </div>
    );
  } else {
    return (
      <div className="App">
        <Summary incArr={incArr} expArr={expArr} />
        <MainActions setIsInput={setIsInput} />
        <ChartDisp rawExpense={rawExpense} rawIncome={rawIncome} />
        <LogDisp
          expArr={expArr}
          fullArr={fullArr}
          incArr={incArr}
          setLogMode={setLogMode}
        />
      </div>
    );
  }
};

/* Export Statement */
export default App;
