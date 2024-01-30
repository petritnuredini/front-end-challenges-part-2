import React from "react";
import "./expenseschart-screen-style.css";
import Balance from "../../components/balance/Balance";
import Chart from "../../components/chart/Chart";

const ExpensesChartScreen = () => {
  return (
    <div className="expenses_chart_screen_container">
      <div className="balance_and_chart_container">
        <Balance />
        <Chart />
      </div>
    </div>
  );
};

export default ExpensesChartScreen;
