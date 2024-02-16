import React from "react";
import { useAppContext } from "./context/ThemeContext";
import Calculator from "./components/Calculator";
import { theme1, theme2, theme3 } from "./constants/constants";

const App = () => {
  const { theme, themeName } = useAppContext(); // Assuming this returns the current theme object
  console.log("theme", theme);
  console.log("themeName", themeName);

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
