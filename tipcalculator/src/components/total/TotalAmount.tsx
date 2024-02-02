import React from "react";
import "./total-amount-style.css";

interface TotalAmountProps {
  tipAmount: string;
  totalAmount: string;
  resetValues: () => void;
}

const TotalAmount = ({
  tipAmount,
  totalAmount,
  resetValues,
}: TotalAmountProps) => {
  return (
    <div className="total_amount_wrapper">
      <div className="total_option">
        <div className="total_option_left">
          <p className="option_title">Tip Amount</p>
          <p className="option_sub_title">/ person</p>
        </div>
        <h1 className="total_amount">${parseFloat(tipAmount).toFixed(2)}</h1>
      </div>
      <div className="total_option">
        <div className="total_option_left">
          <p className="option_title">Total</p>
          <p className="option_sub_title">/ person</p>
        </div>
        <h1 className="total_amount">${parseFloat(totalAmount).toFixed(2)}</h1>
      </div>

      <button
        className="reset_button"
        onClick={resetValues}
        disabled={tipAmount === "0.00" || totalAmount === "0.00"}
      >
        RESET
      </button>
    </div>
  );
};

export default TotalAmount;
