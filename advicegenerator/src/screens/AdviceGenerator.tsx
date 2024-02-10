import React from "react";
import "./advice-generator-style.css";
import AdviceCard from "../components/advicecard/AdviceCard";

const AdviceGenerator = () => {
  return (
    <main className="advice_generator_screen_container" role="main">
      <AdviceCard />
    </main>
  );
};

export default AdviceGenerator;
