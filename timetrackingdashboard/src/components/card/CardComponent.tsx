import React from "react";
import "./card-style.css";
import ThreeDots from "../../assets/images/ThreeDots";
import { Card } from "../../types/types";

const CardComponent = ({
  title,
  backgroundImage,
  backgroundColor,
  timeframes,
  timeFrame,
}: Card) => {
  return (
    <div className="card_wrapper" style={{ backgroundColor: backgroundColor }}>
      <img
        src={backgroundImage}
        alt="Card Background Image"
        className="card_background_image"
      />
      <div className="card_details_wrapper">
        <button className="view_details">
          <ThreeDots />
        </button>
        <p className="card_label">{title}</p>
        <div className="working_hours_wrapper">
          <h1 className="card_working_hours">
            {timeFrame === "Daily"
              ? timeframes.daily.current
              : timeFrame === "Weekly"
              ? timeframes.weekly.current
              : timeframes.monthly.current}
            hrs
          </h1>
          <p className="card_last_time_data">
            Last{" "}
            {timeFrame === "Daily"
              ? "Day"
              : timeFrame === "Weekly"
              ? "Week"
              : "Month"}{" "}
            -{" "}
            {timeFrame === "Daily"
              ? timeframes.daily.previous
              : timeFrame === "Weekly"
              ? timeframes.weekly.previous
              : timeframes.monthly.previous}
            hrs
          </p>
        </div>
      </div>
    </div>
  );
};

export default CardComponent;
