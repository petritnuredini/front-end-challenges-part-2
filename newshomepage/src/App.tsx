import React from "react";
import "./assets/style/appstyle.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./screens/home/Home";
import New from "./screens/new/New";
import Header from "./components/header/Header";

function App() {
  return (
    <BrowserRouter>
      <div className="news_app_container" role="main">
        <Header />
        <div className="news_screens_container">
          <Routes>
            {/* Public routes below this line */}
            <Route path="/" element={<Home />} />
            <Route path="/new" element={<New />} />
            {/* Public routes above this line */}
          </Routes>
        </div>
        <div className="attribution" role="contentinfo">
          Challenge by{" "}
          <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">
            Frontend Mentor
          </a>
          . Coded by <a href="#">Petrit Nuredini</a>{" "}
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
