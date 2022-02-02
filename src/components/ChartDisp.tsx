/* Library Imports */
//Chart Js Component
import "chart.js/auto";
import { Doughnut } from "react-chartjs-2";

//React
import React from "react";

/* Module Imports */
import { dollaBills } from "../modules/ArrayActions";

/* Stylesheet Imports */
import "../styles/Chart.scss";

/* Image Imports */

/* Component Imports */

/* Component Interfaces */
interface Props {
  rawExpense: number;
  rawIncome: number;
}

/* Component/Functions */
const ChartDisp: React.FC<Props> = ({ rawExpense, rawIncome }) => {
  const pimpOut = dollaBills([rawIncome, rawExpense]);
  console.log(pimpOut);

  const chartData = {
    labels: ["Expense", "Income"],
    datasets: [
      {
        label: "Income/Expense Overall",
        data: [rawExpense, rawIncome],
        backgroundColor: ["rgb(255, 99, 132)", "rgb(54, 162, 235)"],
      },
    ],
  };
  //Function return statement
  return (
    <div className="Chart bigBox">
      <div className="titleBox">
        <h3>Chart</h3>
      </div>
      <div className="chartRender">
        <Doughnut className="pieChart" data={chartData} />
      </div>
    </div>
  );
};

/* Export Statement */
export default ChartDisp;
