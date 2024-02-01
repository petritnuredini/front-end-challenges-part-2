import React from "react";
import "./dashboard-profile-style.css";
import { DashBoardProfile } from "../../types/types";

const DashboardProfile = ({
  userimage,
  username,
  timeframes,
  timeFrame,
  setTimeFrame,
}: DashBoardProfile) => {
  return (
    <div className="dashboard_profile_wrapper">
      <div className="dashboard_profile_user">
        <div className="dashboard_image_container">
          <img src={userimage} alt="User image" className="user_image" />
        </div>
        <p className="profile_dashboard_label">Report for</p>
        <h1 className="dashboard_user_name">{username}</h1>
      </div>

      <div className="time_options">
        {timeframes.length > 0 &&
          timeframes.map((time: string) => (
            <button
              className={`option ${timeFrame === time ? "active" : ""}`}
              key={time}
              onClick={() => setTimeFrame && setTimeFrame(time)}
            >
              {time}
            </button>
          ))}
      </div>
    </div>
  );
};

export default DashboardProfile;
