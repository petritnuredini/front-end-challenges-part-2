import React from "react";
import "./assets/style/appstyle.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./screens/home/Home";
import New from "./screens/new/New";
import Header from "./components/header/Header";

function App() {
  return (
    <BrowserRouter>
      <div className="news_app_container">
        <Header />
        <div className="news_screens_container">
          <Routes>
            {/* Public routes below this line */}
            <Route path="/" element={<Home />} />
            <Route path="/new" element={<New />} />
            {/* Public routes above this line */}
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
