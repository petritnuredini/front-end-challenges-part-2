import React, { useEffect, useState } from "react";
import "./splitter-style.css";
import Calculator from "../components/calculator/Calculator";
import TotalAmount from "../components/total/TotalAmount";

const Splitter = () => {
  const [billAmount, setBillAmount] = useState<string>("");
  const [numberOfPeople, setNumberOfPeople] = useState<string>("");
  const [tipPercentage, setTipPercentage] = useState<string>("5");
  const [tipAmount, setTipAmount] = useState<string>("0.00");
  const [totalAmount, setTotalAmount] = useState<string>("0.00");

  const resetValues = () => {
    setBillAmount("");
    setNumberOfPeople("");
  };

  const calculateValues = () => {
    if (
      billAmount !== "" &&
      parseFloat(billAmount) > 0 &&
      numberOfPeople !== "" &&
      parseInt(numberOfPeople) > 0 &&
      tipPercentage !== "" &&
      parseFloat(tipPercentage) > 0
    ) {
      let tipAmountPerPerson =
        (parseFloat(billAmount) * (parseFloat(tipPercentage) / 100)) /
        parseInt(numberOfPeople);
      setTipAmount(tipAmountPerPerson.toString());

      let totalAmountPerPerson =
        parseFloat(billAmount) / parseInt(numberOfPeople) + tipAmountPerPerson;
      setTotalAmount(totalAmountPerPerson.toString());
    } else {
      setTipAmount("0.00");
      setTotalAmount("0.00");
    }
  };

  useEffect(() => {
    calculateValues();
  }, [billAmount, tipPercentage, numberOfPeople]);

  return (
    <div className="splitter_screen_container">
      <h1 className="splitter_app_title">
        Spli
        <br />
        tter
      </h1>
      <div className="splitter_app">
        <Calculator
          billAmount={billAmount}
          setBillAmount={setBillAmount}
          numberOfPeople={numberOfPeople}
          setNumberOfPeople={setNumberOfPeople}
          tipPercentage={tipPercentage}
          setTipPercentage={setTipPercentage}
        />
        <TotalAmount
          tipAmount={tipAmount}
          totalAmount={totalAmount}
          resetValues={resetValues}
        />
      </div>
    </div>
  );
};

export default Splitter;
