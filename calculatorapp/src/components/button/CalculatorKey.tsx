import React from "react";
import { ThemeType } from "../../types/types";

interface CalculatorKeyProps {
  value: string;
  onClick: (value: string) => void;
  theme: ThemeType;
  themeName: string;
  keyType: keyof ThemeType["keys"];
  specialKey: boolean;
  contrast: boolean;
}

const CalculatorKey: React.FC<CalculatorKeyProps> = ({
  value,
  onClick,
  theme,
  themeName,
  keyType,
  specialKey,
  contrast,
}) => {
  const buttonStyle = {
    backgroundColor: theme.keys[keyType].background,
    boxShadow: `0px 5px 0px 0px ${theme.keys[keyType].shadow}`,
  };

  const textStyle = {
    color:
      (contrast && !specialKey) || (specialKey && themeName !== "theme3")
        ? "white"
        : (specialKey && themeName === "theme3") || themeName === "theme1"
        ? "black"
        : theme.text.typeTwo,
  };

  return (
    <button
      className={`calc_key_${
        value === "="
          ? "large"
          : keyType === "typeOne" && value !== "DEL"
          ? "large"
          : "regular"
      }`}
      style={buttonStyle}
      onClick={() => onClick(value)}
    >
      <h2 className="calc_key" style={textStyle}>
        {value}
      </h2>
    </button>
  );
};

export default CalculatorKey;
