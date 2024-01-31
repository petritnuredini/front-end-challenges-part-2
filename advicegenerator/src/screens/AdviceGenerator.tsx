import React from "react";
import "./advice-generator-style.css";
import AdviceCard from "../components/advicecard/AdviceCard";

const AdviceGenerator = () => {
  return (
    <div className="advice_generator_screen_container" role="main">
      <AdviceCard />
    </div>
  );
};

export default AdviceGenerator;
