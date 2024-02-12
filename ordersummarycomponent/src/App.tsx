import React from "react";
import "./App.css";
import Card from "./components/Card";
import BackgroundDesktop from "./assets/images/pattern-background-desktop.svg";
import BackgroundMobile from "./assets/images/pattern-background-mobile.svg";

function App() {
  return (
    <main className="order_summary_container">
      <img
        src={BackgroundDesktop}
        alt="Background pattern desktop"
        className="background_desktop"
      />
      <img
        src={BackgroundMobile}
        alt="Background pattern mobile"
        className="background_mobile"
      />
      <Card />
    </main>
  );
}

export default App;
