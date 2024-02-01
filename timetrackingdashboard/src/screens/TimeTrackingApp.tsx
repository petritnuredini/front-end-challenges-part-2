import React, { useState } from "react";
import "./time-tracking-app-style.css";
import DashboardProfile from "../components/profile/DashboardProfile";
import { appdata } from "../data/appdata";
import CardComponent from "../components/card/CardComponent";
import { Card } from "../types/types";

const TimeTrackingApp = () => {
  const [timeFrame, setTimeFrame] = useState<string>("Weekly");
  const { userimage, username, timeframes } = appdata.dashboard;
  const { cards } = appdata;

  return (
    <div className="dashboard_container">
      <DashboardProfile
        userimage={userimage}
        timeframes={timeframes}
        username={username}
        timeFrame={timeFrame}
        setTimeFrame={setTimeFrame}
      />

      <div className="dashboard_cards">
        {cards.length > 0 &&
          cards.map((card: Card) => (
            <CardComponent
              key={card.title}
              backgroundColor={card.backgroundColor}
              backgroundImage={card.backgroundImage}
              title={card.title}
              timeframes={card.timeframes}
              timeFrame={timeFrame}
            />
          ))}
      </div>
    </div>
  );
};

export default TimeTrackingApp;
