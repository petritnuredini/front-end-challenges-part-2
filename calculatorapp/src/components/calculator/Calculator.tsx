import React, { useState } from "react";
import "./calculator-style.css";
import { useAppContext } from "../../context/ThemeContext";
import CalculatorKey from "../button/CalculatorKey";
import { ThemeType } from "../../types/types";

interface KeysType {
  value: string;
  styleClass: string;
  keyType: string;
  contrast: boolean;
  specialKey: boolean;
}

const Calculator = () => {
  const { setThemeName, themeName, theme } = useAppContext();
  const [toggleState, setToggleState] = useState<number>(1);
  const [calcScreenNumber, setCalcScreenNumber] = useState<string>("0");

  const handleToggle = (newState: number) => {
    setToggleState(newState);
    setThemeName("theme" + newState);
  };

  const [operand1, setOperand1] = useState<string | null>(null);
  const [operatorSelected, setOperatorSelected] = useState<boolean>(false);
  const [currentOperation, setCurrentOperation] = useState<string | null>(null);

  const calculate = (inputValue: string) => {
    let result = 0;

    if (operand1 !== null) {
      switch (currentOperation) {
        case "+":
          result = parseFloat(operand1) + parseFloat(inputValue);
          break;
        case "-":
          result = parseFloat(operand1) - parseFloat(inputValue);
          break;
        case "x":
          result = parseFloat(operand1) * parseFloat(inputValue);
          break;
        case "/":
          result = parseFloat(operand1) / parseFloat(inputValue);
          break;
        default:
          result = parseFloat(inputValue);
      }
    }

    setCalcScreenNumber(result.toString());
    setOperand1(null);
    setCurrentOperation(null);
  };

  const handleKeyPress = (value: string) => {
    if (["+", "-", "x", "/"].includes(value)) {
      setOperand1(calcScreenNumber);
      setCurrentOperation(value);
      setOperatorSelected(true);
    } else if (value === "=") {
      calculate(calcScreenNumber);
      setOperatorSelected(false);
    } else if (value === "DEL") {
      setCalcScreenNumber("0");
      setOperand1(null);
      setOperatorSelected(false);
    } else {
      if (operatorSelected) {
        setCalcScreenNumber(value);
        setOperatorSelected(false);
      } else {
        setCalcScreenNumber((prev) => (prev === "0" ? value : prev + value));
      }
    }
  };

  const keys: KeysType[] = [
    {
      value: "7",
      styleClass: "calc_key_regular",
      keyType: "typeThree",
      contrast: false,
      specialKey: false,
    },
    {
      value: "8",
      styleClass: "calc_key_regular",
      keyType: "typeThree",
      contrast: false,
      specialKey: false,
    },
    {
      value: "9",
      styleClass: "calc_key_regular",
      keyType: "typeThree",
      contrast: false,
      specialKey: false,
    },
    {
      value: "DEL",
      styleClass: "calc_key_regular",
      keyType: "typeOne",
      contrast: true,
      specialKey: false,
    },
    {
      value: "4",
      styleClass: "calc_key_regular",
      keyType: "typeThree",
      contrast: false,
      specialKey: false,
    },
    {
      value: "5",
      styleClass: "calc_key_regular",
      keyType: "typeThree",
      contrast: false,
      specialKey: false,
    },
    {
      value: "6",
      styleClass: "calc_key_regular",
      keyType: "typeThree",
      contrast: false,
      specialKey: false,
    },
    {
      value: "+",
      styleClass: "calc_key_regular",
      keyType: "typeThree",
      contrast: false,
      specialKey: false,
    },
    {
      value: "1",
      styleClass: "calc_key_regular",
      keyType: "typeThree",
      contrast: false,
      specialKey: false,
    },
    {
      value: "2",
      styleClass: "calc_key_regular",
      keyType: "typeThree",
      contrast: false,
      specialKey: false,
    },
    {
      value: "3",
      styleClass: "calc_key_regular",
      keyType: "typeThree",
      contrast: false,
      specialKey: false,
    },
    {
      value: "-",
      styleClass: "calc_key_regular",
      keyType: "typeThree",
      contrast: false,
      specialKey: false,
    },
    {
      value: ".",
      styleClass: "calc_key_regular",
      keyType: "typeThree",
      contrast: false,
      specialKey: false,
    },
    {
      value: "0",
      styleClass: "calc_key_regular",
      keyType: "typeThree",
      contrast: false,
      specialKey: false,
    },
    {
      value: "/",
      styleClass: "calc_key_regular",
      keyType: "typeThree",
      contrast: false,
      specialKey: false,
    },
    {
      value: "x",
      styleClass: "calc_key_regular",
      keyType: "typeThree",
      contrast: false,
      specialKey: false,
    },
    {
      value: "RESET",
      styleClass: "calc_key_large",
      keyType: "typeOne",
      contrast: true,
      specialKey: false,
    },
    {
      value: "=",
      styleClass: "calc_key_large",
      keyType: "typeTwo",
      contrast: true,
      specialKey: true,
    },
  ];

  return (
    <div className="calculator_wrapper">
      <div className="calc_header">
        <h1 className="calc_title" style={{ color: theme.text.typeTwo }}>
          calc
        </h1>
        <div className="theme_switcher">
          <p className="theme_label" style={{ color: theme.text.typeTwo }}>
            THEME
          </p>
          <div className="toggler-container">
            <div className="toggle-numbers">
              {[1, 2, 3].map((number) => (
                <span
                  key={number}
                  className={toggleState === number ? "active" : ""}
                  onClick={() => handleToggle(number)}
                  style={{ color: theme.text.typeTwo }}
                >
                  {number}
                </span>
              ))}
            </div>
            <div
              className="toggle-switch"
              onClick={() => handleToggle((toggleState % 3) + 1)}
              style={{ backgroundColor: theme.backgrounds.toggleBackground }}
            >
              <div
                className={`circle position-${toggleState}`}
                style={{ backgroundColor: theme.keys.typeTwo.background }}
              ></div>
            </div>
          </div>
        </div>
      </div>
      <div
        className="calc_screen"
        style={{ backgroundColor: theme.backgrounds.screenBackground }}
      >
        <h1 className="calc_screen_value" style={{ color: theme.text.typeTwo }}>
          {calcScreenNumber}
        </h1>
      </div>

      <div
        className="calc_key_pad"
        style={{ backgroundColor: theme.backgrounds.toggleBackground }}
      >
        {/* First Line */}

        {keys.map((key, index) => (
          <CalculatorKey
            key={index}
            value={key.value}
            onClick={handleKeyPress}
            theme={theme}
            themeName={themeName}
            keyType={key.keyType as keyof ThemeType["keys"]}
            specialKey={key.specialKey}
            contrast={key.contrast}
          />
        ))}

        {/* <button
          className="calc_key_regular"
          style={{
            backgroundColor: theme.keys.typeThree.background,
            boxShadow: `0px 5px 0px 0px ${theme.keys.typeThree.shadow}`,
          }}
          onClick={() => handleKeyPress("7")}
        >
          <h2
            className="calc_key"
            style={{
              color: themeName === "theme1" ? "black" : theme.text.typeTwo,
            }}
          >
            7
          </h2>
        </button>
        <button
          className="calc_key_regular"
          style={{
            backgroundColor: theme.keys.typeThree.background,
            boxShadow: `0px 5px 0px 0px ${theme.keys.typeThree.shadow}`,
          }}
          onClick={() => handleKeyPress("8")}
        >
          <h2
            className="calc_key"
            style={{
              color: themeName === "theme1" ? "black" : theme.text.typeTwo,
            }}
          >
            8
          </h2>
        </button>
        <button
          className="calc_key_regular"
          style={{
            backgroundColor: theme.keys.typeThree.background,
            boxShadow: `0px 5px 0px 0px ${theme.keys.typeThree.shadow}`,
          }}
          onClick={() => handleKeyPress("9")}
        >
          <h2
            className="calc_key"
            style={{
              color: themeName === "theme1" ? "black" : theme.text.typeTwo,
            }}
          >
            9
          </h2>
        </button>
        <button
          className="calc_key_regular"
          style={{
            backgroundColor: theme.keys.typeOne.background,
            boxShadow: `0px 5px 0px 0px ${theme.keys.typeOne.shadow}`,
          }}
          onClick={() => handleKeyPress("DEL")}
        >
          <h2
            className="calc_key"
            style={{
              color: theme.text.typeTwo,
            }}
          >
            DEL
          </h2>
        </button> */}
        {/* Second Line */}
        {/* <button
          className="calc_key_regular"
          style={{
            backgroundColor: theme.keys.typeThree.background,
            boxShadow: `0px 5px 0px 0px ${theme.keys.typeThree.shadow}`,
          }}
          onClick={() => handleKeyPress("4")}
        >
          <h2
            className="calc_key"
            style={{
              color: themeName === "theme1" ? "black" : theme.text.typeTwo,
            }}
          >
            4
          </h2>
        </button>
        <button
          className="calc_key_regular"
          style={{
            backgroundColor: theme.keys.typeThree.background,
            boxShadow: `0px 5px 0px 0px ${theme.keys.typeThree.shadow}`,
          }}
          onClick={() => handleKeyPress("5")}
        >
          <h2
            className="calc_key"
            style={{
              color: themeName === "theme1" ? "black" : theme.text.typeTwo,
            }}
          >
            5
          </h2>
        </button>
        <button
          className="calc_key_regular"
          style={{
            backgroundColor: theme.keys.typeThree.background,
            boxShadow: `0px 5px 0px 0px ${theme.keys.typeThree.shadow}`,
          }}
          onClick={() => handleKeyPress("6")}
        >
          <h2
            className="calc_key"
            style={{
              color: themeName === "theme1" ? "black" : theme.text.typeTwo,
            }}
          >
            6
          </h2>
        </button>
        <button
          className="calc_key_regular"
          style={{
            backgroundColor: theme.keys.typeThree.background,
            boxShadow: `0px 5px 0px 0px ${theme.keys.typeThree.shadow}`,
          }}
          onClick={() => handleKeyPress("+")}
        >
          <h2
            className="calc_key"
            style={{
              color: themeName === "theme1" ? "black" : theme.text.typeTwo,
            }}
          >
            +
          </h2>
        </button> */}

        {/* Third Line */}
        {/* <button
          className="calc_key_regular"
          style={{
            backgroundColor: theme.keys.typeThree.background,
            boxShadow: `0px 5px 0px 0px ${theme.keys.typeThree.shadow}`,
          }}
          onClick={() => handleKeyPress("1")}
        >
          <h2
            className="calc_key"
            style={{
              color: themeName === "theme1" ? "black" : theme.text.typeTwo,
            }}
          >
            1
          </h2>
        </button>
        <button
          className="calc_key_regular"
          style={{
            backgroundColor: theme.keys.typeThree.background,
            boxShadow: `0px 5px 0px 0px ${theme.keys.typeThree.shadow}`,
          }}
          onClick={() => handleKeyPress("2")}
        >
          <h2
            className="calc_key"
            style={{
              color: themeName === "theme1" ? "black" : theme.text.typeTwo,
            }}
          >
            2
          </h2>
        </button>
        <button
          className="calc_key_regular"
          style={{
            backgroundColor: theme.keys.typeThree.background,
            boxShadow: `0px 5px 0px 0px ${theme.keys.typeThree.shadow}`,
          }}
          onClick={() => handleKeyPress("3")}
        >
          <h2
            className="calc_key"
            style={{
              color: themeName === "theme1" ? "black" : theme.text.typeTwo,
            }}
          >
            3
          </h2>
        </button>
        <button
          className="calc_key_regular"
          style={{
            backgroundColor: theme.keys.typeThree.background,
            boxShadow: `0px 5px 0px 0px ${theme.keys.typeThree.shadow}`,
          }}
          onClick={() => handleKeyPress("-")}
        >
          <h2
            className="calc_key"
            style={{
              color: themeName === "theme1" ? "black" : theme.text.typeTwo,
            }}
          >
            -
          </h2>
        </button> */}

        {/* Fourth Line */}
        {/* <button
          className="calc_key_regular"
          style={{
            backgroundColor: theme.keys.typeThree.background,
            boxShadow: `0px 5px 0px 0px ${theme.keys.typeThree.shadow}`,
          }}
          onClick={() => handleKeyPress(".")}
        >
          <h2
            className="calc_key"
            style={{
              color: themeName === "theme1" ? "black" : theme.text.typeTwo,
            }}
          >
            .
          </h2>
        </button>
        <button
          className="calc_key_regular"
          style={{
            backgroundColor: theme.keys.typeThree.background,
            boxShadow: `0px 5px 0px 0px ${theme.keys.typeThree.shadow}`,
          }}
          onClick={() => handleKeyPress("0")}
        >
          <h2
            className="calc_key"
            style={{
              color: themeName === "theme1" ? "black" : theme.text.typeTwo,
            }}
          >
            0
          </h2>
        </button>
        <button
          className="calc_key_regular"
          style={{
            backgroundColor: theme.keys.typeThree.background,
            boxShadow: `0px 5px 0px 0px ${theme.keys.typeThree.shadow}`,
          }}
          onClick={() => handleKeyPress("/")}
        >
          <h2
            className="calc_key"
            style={{
              color: themeName === "theme1" ? "black" : theme.text.typeTwo,
            }}
          >
            /
          </h2>
        </button>
        <button
          className="calc_key_regular"
          style={{
            backgroundColor: theme.keys.typeThree.background,
            boxShadow: `0px 5px 0px 0px ${theme.keys.typeThree.shadow}`,
          }}
          onClick={() => handleKeyPress("*")}
        >
          <h2
            className="calc_key"
            style={{
              color: themeName === "theme1" ? "black" : theme.text.typeTwo,
            }}
          >
            x
          </h2>
        </button> */}

        {/* Fith Line */}
        {/* <button
          className="calc_key_large"
          style={{
            backgroundColor: theme.keys.typeOne.background,
            boxShadow: `0px 5px 0px 0px ${theme.keys.typeOne.shadow}`,
          }}
          onClick={() => setCalcScreenNumber("0")}
        >
          <h2
            className="calc_key"
            style={{
              color: theme.text.typeTwo,
            }}
          >
            RESET
          </h2>
        </button>
        <button
          className="calc_key_large"
          style={{
            backgroundColor: theme.keys.typeTwo.background,
            boxShadow: `0px 5px 0px 0px ${theme.keys.typeTwo.shadow}`,
          }}
          onClick={() => handleKeyPress("=")}
        >
          <h2
            className="calc_key"
            style={{
              color: theme.text.typeTwo,
            }}
          >
            =
          </h2>
        </button> */}
      </div>
    </div>
  );
};

export default Calculator;
