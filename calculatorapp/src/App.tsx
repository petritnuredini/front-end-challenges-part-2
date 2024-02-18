import React from "react";
import "./App.css";
import { useAppContext } from "./context/ThemeContext";
import Calculator from "./components/calculator/Calculator";
import { theme1, theme2, theme3 } from "./constants/constants";

const App = () => {
  const { theme, themeName } = useAppContext(); // Assuming this returns the current theme object

  return (
    <div
      className={`calculator_app ${themeName}`}
      style={{ backgroundColor: theme.backgrounds.mainBackground }}
    >
      <Calculator />
    </div>
  );
};

export default App;
