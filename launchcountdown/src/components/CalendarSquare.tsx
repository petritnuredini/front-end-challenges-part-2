import React from "react";
import "./CalendarSquare.css";

interface CalendarSquareProps {
  number: string;
  label: string;
}

const CalendarSquare: React.FC<CalendarSquareProps> = ({ number, label }) => {
  return (
    <div className="count_down_item">
      <div className="calendar_wrapper">
        <h1 className="countdown_number">{number}</h1>
        <div className="circle_left"></div>
        <div className="calendar_item_top"></div>
        <div className="divider"></div>
        <div className="calendar_item_bottom"></div>
        <div className="circle_right"></div>
      </div>

      <p className="calendar_label">{label}</p>
    </div>
  );
};

export default CalendarSquare;
