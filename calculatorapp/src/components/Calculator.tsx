import React, { useState } from "react";
import "./calculator-style.css";

const Calculator = () => {
  const [toggleState, setToggleState] = useState<number>(1);

  const handleToggle = (newState: number) => {
    setToggleState(newState);
  };

  return (
    <div className="calculator_wrapper">
      <div className="calc_header">
        <h1 className="calc_title">calc</h1>
        <div className="theme_switcher">
          <p className="theme_label">THEME</p>
          <div className="toggler-container">
            <div className="toggle-numbers">
              {[1, 2, 3].map((number) => (
                <span
                  key={number}
                  className={toggleState === number ? "active" : ""}
                  onClick={() => handleToggle(number)}
                >
                  {number}
                </span>
              ))}
            </div>
            <div
              className="toggle-switch"
              onClick={() => handleToggle((toggleState % 3) + 1)}
            >
              <div className={`circle position-${toggleState}`}></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Calculator;
