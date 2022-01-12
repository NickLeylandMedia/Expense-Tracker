/* Library Imports */
//React
import React, { useEffect, useState } from "react";

/* Stylesheet Imports */
import "normalize-scss";
import "./styles/App.scss";

/* Image Imports */

/* Component Imports */
import Chart from "./components/Chart";
import Form from "./components/Form";
import Log from "./components/Log";
import MainActions from "./components/MainActions";
import Summary from "./components/Summary";

/* Component Interfaces */

/* Component/Functions */
const App = () => {
  //State to store ALL Items
  const [fullArr, pushFullArr] = useState<any[]>([]);
  //State to store Income Items
  const [incArr, pushIncArr] = useState<any[]>([]);
  //State to store Expense Items
  const [expArr, pushExpArr] = useState<any[]>([]);
  //State to store Application State
  const [isInput, setIsInput] = useState<boolean>(false);

  //Effect to sort data
  useEffect(() => {
    if (fullArr.length) {
      const incomes: any[] = fullArr.filter((item) => item.Type === "Income");
      const expenses: any[] = fullArr.filter((item) => item.Type === "Expense");
      pushIncArr(incomes);
      pushExpArr(expenses);
    }
  }, [fullArr]);

  //Function return statement
  if (isInput) {
    return (
      <div className="App">
        <Form
          fullArr={fullArr}
          pushFullArr={pushFullArr}
          setIsInput={setIsInput}
        />
      </div>
    );
  } else {
    return (
      <div className="App">
        <Summary incArr={incArr} expArr={expArr} />
        <MainActions setIsInput={setIsInput} />
        <Chart />
        <Log />
      </div>
    );
  }
};

/* Export Statement */
export default App;
