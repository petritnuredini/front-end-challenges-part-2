import React from "react";
import "./splitter-style.css";
import Calculator from "../components/calculator/Calculator";
import TotalAmount from "../components/total/TotalAmount";

const Splitter = () => {
  return (
    <div className="splitter_screen_container">
      <h1 className="splitter_app_title">
        Spli
        <br />
        tter
      </h1>
      <div className="splitter_app">
        <Calculator />
        <TotalAmount />
      </div>
    </div>
  );
};

export default Splitter;
