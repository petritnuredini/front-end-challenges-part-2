import React, { ChangeEvent, useState } from "react";
import "./calculator-style.css";
import DollarSign from "../../assets/images/icon-dollar.svg";
import PersonSign from "../../assets/images/icon-person.svg";

interface CalculatorProps {
  billAmount: string;
  setBillAmount: (billAmount: string) => void;
  numberOfPeople: string;
  setNumberOfPeople: (numberOfPeople: string) => void;
  tipPercentage: string;
  setTipPercentage: (tipPercentage: string) => void;
}

const Calculator = ({
  billAmount,
  setBillAmount,
  numberOfPeople,
  setNumberOfPeople,
  tipPercentage,
  setTipPercentage,
}: CalculatorProps) => {
  const [customTipPercentage, setCustomTipPercentage] = useState<string>("");
  const onBillInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    if (value === "" || /^(\d+\.?\d*|\.\d+)$/.test(value)) {
      setBillAmount(value);
    }
  };

  const onNumberOfPeopleInputChange = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    const value = e.target.value;
    if (value === "" || /^(\d+\.?\d*|\.\d+)$/.test(value)) {
      setNumberOfPeople(value);
    }
  };

  const onTipPercentageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    if (value === "" || /^(\d+\.?\d*|\.\d+)$/.test(value)) {
      setCustomTipPercentage(value);
      setTipPercentage(value);
    }
  };

  return (
    <aside className="calculator_wrapper">
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
            value={billAmount}
            onChange={onBillInputChange}
          />
        </div>
      </div>
      <div className="select_tip_percentage">
        <p className="label">Select Tip %</p>
        <div className="select_tip_options_wrapper">
          <button
            className={`tip_option ${tipPercentage === "5" ? "active" : ""}`}
            onClick={() => setTipPercentage("5")}
          >
            5%
          </button>
          <button
            className={`tip_option ${tipPercentage === "10" ? "active" : ""}`}
            onClick={() => setTipPercentage("10")}
          >
            10%
          </button>
          <button
            className={`tip_option ${tipPercentage === "15" ? "active" : ""}`}
            onClick={() => setTipPercentage("15")}
          >
            15%
          </button>
          <button
            className={`tip_option ${tipPercentage === "25" ? "active" : ""}`}
            onClick={() => setTipPercentage("25")}
          >
            25%
          </button>
          <button
            className={`tip_option ${tipPercentage === "50" ? "active" : ""}`}
            onClick={() => setTipPercentage("50")}
          >
            50%
          </button>
          <input
            type="text"
            className="tip_custom_option"
            placeholder="Custom"
            value={customTipPercentage}
            onChange={onTipPercentageChange}
          />
        </div>
      </div>
      <div className="splitter_input_wrapper">
        <p
          className={`error_message ${
            numberOfPeople === "0" ? "show_error" : ""
          }`}
        >
          Can't be zero!
        </p>

        <label htmlFor="number_of_people_input" className="label">
          Number of People
        </label>
        <div className="input_wrapper">
          <img src={PersonSign} alt="Person sign" className="input_icon" />
          <input
            type="text"
            id="number_of_people_input"
            className={`splitter_input ${
              numberOfPeople === "0" ? "error_input" : ""
            }`}
            placeholder="0"
            value={numberOfPeople}
            onChange={onNumberOfPeopleInputChange}
          />
        </div>
      </div>
    </aside>
  );
};

export default Calculator;
