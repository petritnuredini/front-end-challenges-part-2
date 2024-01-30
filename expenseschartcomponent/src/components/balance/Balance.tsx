import React from "react";
import "./balance-style.css";
import BalanceLogo from "../../assets/images/BalanceLogo";

const Balance = () => {
  return (
    <div className="balance_details_container">
      <div className="left_side_balance">
        <h3 className="my_balance_label">My balance</h3>
        <h3 className="balance_amount">$921.48</h3>
      </div>
      <div className="right_side_image_container">
        <BalanceLogo />
      </div>
    </div>
  );
};

export default Balance;
