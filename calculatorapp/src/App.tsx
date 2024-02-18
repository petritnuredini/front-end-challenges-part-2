import React, { useEffect } from "react";
import "./App.css";
import { useAppContext } from "./context/ThemeContext";
import Calculator from "./components/calculator/Calculator";

const App = () => {
  const { theme, themeName } = useAppContext();

  const updateBodyBackground = (backgroundColor: string) => {
    document.body.style.backgroundColor = backgroundColor;
  };

  useEffect(() => {
    updateBodyBackground(theme.backgrounds.mainBackground);
  }, [theme]);

  return (
    <main
      className={`calculator_app ${themeName}`}
      style={{ backgroundColor: theme.backgrounds.mainBackground }}
    >
      <Calculator />
    </main>
  );
};

export default App;
