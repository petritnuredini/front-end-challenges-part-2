import React from "react";
import "./chart-style.css";
import data from "../../data/data.json";

const Chart = () => {
  const maxAmount = Math.max(...data.map((item) => item.amount));

  const currentDay = new Date()
    .toLocaleString("en-us", { weekday: "short" })
    .toLowerCase();

  return (
    <div className="chart_wrapper">
      <h3 className="chart_title">Spending - Last 7 days</h3>
      <div className="chart_data_container">
        {data.length > 0 &&
          data.map((dataItem) => {
            const heightPercentage = (dataItem.amount / maxAmount) * 100;
            const isCurrentDay = dataItem.day === currentDay;
            const itemStyle = {
              height: `${heightPercentage}%`,
              backgroundColor: isCurrentDay
                ? "hsl(186, 34%, 60%)"
                : "hsl(10, 79%, 65%)",
            };

            return (
              <div className="chart_item" key={dataItem.day}>
                <div className="chart_item_amount" style={itemStyle}>
                  <div className="chart_tooltip">
                    <p className="tooltip_amount">${dataItem.amount}</p>
                  </div>
                </div>
                <p className="chart_day">{dataItem.day}</p>
              </div>
            );
          })}
      </div>
      <div className="total_amount_chart_details_container">
        <div className="total_amount_left_side">
          <h3 className="total_amount_label">Total this month</h3>
          <h3 className="total_amount">$478.33</h3>
        </div>
        <div className="total_amount_right_side">
          <h3 className="total_amount_percentage">+2.4%</h3>
          <h3 className="total_amount_percentage_label">from last month</h3>
        </div>
      </div>
    </div>
  );
};

export default Chart;
