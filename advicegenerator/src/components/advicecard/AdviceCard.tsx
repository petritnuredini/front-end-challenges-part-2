import React from "react";
import "./advice-card-style.css";
import DividerDesktop from "../../assets/images/DividerDesktop";
import DiceIcon from "../../assets/images/DiceIcon";
import useAdviceHook from "./useAdviceHook";
import DividerMobile from "../../assets/images/DividerMobile";

const AdviceCard = () => {
  const { advice, fetchAdvice, loading } = useAdviceHook();

  return (
    <section className="advice_card_wrapper" role="application">
      {loading === false ? (
        <>
          {" "}
          <h1 className="advice_id_label">
            ADVICE #{advice.id !== null ? advice.id : "000"}
          </h1>
          {advice.advice !== null ? (
            <p className="advice_text">“{advice.advice}”</p>
          ) : (
            <p className="advice_text">
              “Something went wrong fetching advice, best advice I can give is :
              fix your internet or come again later!”
            </p>
          )}
        </>
      ) : (
        <p className="advice_text">Loading...</p>
      )}

      <DividerDesktop />
      <DividerMobile />

      <button className="dice_button" onClick={fetchAdvice}>
        <DiceIcon />
      </button>
    </section>
  );
};

export default AdviceCard;
