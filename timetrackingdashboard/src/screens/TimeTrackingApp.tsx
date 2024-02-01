import React from "react";
import "./time-tracking-app-style.css";
import DashboardProfile from "../components/profile/DashboardProfile";
import { appdata } from "../data/appdata";

const TimeTrackingApp = () => {
  const { userimage, username, timeframes } = appdata.dashboard;

  return (
    <div className="dashboard_container">
      <DashboardProfile
        userimage={userimage}
        timeframes={timeframes}
        username={username}
      />

      <div className="dashboard_cards">Cards</div>
    </div>
  );
};

export default TimeTrackingApp;
