import React from "react";
import "./calculator-style.css";
import DollarSign from "../../assets/images/icon-dollar.svg";
import PersonSign from "../../assets/images/icon-person.svg";

const Calculator = () => {
  return (
    <div className="calculator_wrapper">
      <div className="splitter_input_wrapper">
        <p className="error_message">Can't be zero!</p>
        <label htmlFor="bill_input" className="label">
          Bill
        </label>
        <div className="input_wrapper">
          <img src={DollarSign} alt="Dollar sign" className="input_icon" />
          <input
            type="text"
            id="bill_input"
            className="splitter_input"
            placeholder="0"
          />
        </div>
      </div>
      <div className="select_tip_percentage">
        <p className="label">Select Tip %</p>
        <div className="select_tip_options_wrapper">
          <button className="tip_option">5%</button>
          <button className="tip_option">10%</button>
          <button className="tip_option">15%</button>
          <button className="tip_option">25%</button>
          <button className="tip_option">50%</button>
          <input
            type="text"
            className="tip_custom_option"
            placeholder="Custom"
          />
        </div>
      </div>
      <div className="splitter_input_wrapper">
        <p className="error_message show_error">Can't be zero!</p>

        <label htmlFor="number_of_people_input" className="label">
          Number of People
        </label>
        <div className="input_wrapper">
          <img src={PersonSign} alt="Person sign" className="input_icon" />
          <input
            type="text"
            id="number_of_people_input"
            className="splitter_input error_input"
            placeholder="0"
          />
        </div>
      </div>
    </div>
  );
};

export default Calculator;
