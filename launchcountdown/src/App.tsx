import React, { useState, useEffect } from "react";
import "./App.css";
import Stars from "./assets/images/bg-stars.svg";
import PatternHills from "./assets/images/pattern-hills.svg";
import CalendarSquare from "./components/CalendarSquare";
import {
  FacebookIcon,
  InstagramIcon,
  PinterestIcon,
} from "./assets/images/SocialMediaIcons";

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

const targetDate = new Date("2024-02-17T00:00:00").getTime();

const calculateTimeLeft = (): TimeLeft => {
  const now = new Date().getTime();
  const difference = targetDate - now;

  let timeLeft: TimeLeft = {
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  };

  if (difference > 0) {
    timeLeft = {
      days: Math.floor(difference / (1000 * 60 * 60 * 24)),
      hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((difference / 1000 / 60) % 60),
      seconds: Math.floor((difference / 1000) % 60),
    };
  }

  return timeLeft;
};

const App: React.FC = () => {
  const [timeLeft, setTimeLeft] = useState<TimeLeft>(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    // Cleanup the interval on component unmount
    return () => clearInterval(timer);
  }, []);

  return (
    <main className="countdown_timer_app">
      <img src={Stars} alt="stars background" className="stars_bg" />
      <img src={PatternHills} alt="Pattern hills" className="pattern_hills" />
      <h1 className="launch_title">We're launching soon</h1>
      <section className="countdown_wrapper">
        <CalendarSquare
          number={timeLeft.days.toString().padStart(2, "0")}
          label="Days"
        />
        <CalendarSquare
          number={timeLeft.hours.toString().padStart(2, "0")}
          label="Hours"
        />
        <CalendarSquare
          number={timeLeft.minutes.toString().padStart(2, "0")}
          label="Minutes"
        />
        <CalendarSquare
          number={timeLeft.seconds.toString().padStart(2, "0")}
          label="Seconds"
        />
      </section>
      <section className="social_media">
        <a href="#" className="social_media_link">
          <FacebookIcon />
        </a>
        <a href="#" className="social_media_link">
          <PinterestIcon />
        </a>
        <a href="#" className="social_media_link">
          <InstagramIcon />
        </a>
      </section>
    </main>
  );
};

export default App;
