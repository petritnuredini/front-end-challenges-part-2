import React, { useState } from "react";
import "./calculator-style.css";
import { useAppContext } from "../context/ThemeContext";

const Calculator = () => {
  const { setThemeName, themeName, theme } = useAppContext();
  const [toggleState, setToggleState] = useState<number>(1);
  const [calcScreenNumber, setCalcScreenNumber] = useState<string>("399.981");

  const handleToggle = (newState: number) => {
    setToggleState(newState);
    setThemeName("theme" + newState);
  };

  console.log("toggleState", toggleState);

  console.log(themeName);

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
        <div
          className="calc_key_regular"
          style={{
            backgroundColor: theme.keys.typeThree.background,
            boxShadow: `0px 5px 0px 0px ${theme.keys.typeThree.shadow}`,
          }}
        >
          <h2
            className="calc_key"
            style={{
              color: themeName === "theme1" ? "black" : theme.text.typeTwo,
            }}
          >
            7
          </h2>
        </div>
        <div
          className="calc_key_regular"
          style={{
            backgroundColor: theme.keys.typeThree.background,
            boxShadow: `0px 5px 0px 0px ${theme.keys.typeThree.shadow}`,
          }}
        >
          <h2
            className="calc_key"
            style={{
              color: themeName === "theme1" ? "black" : theme.text.typeTwo,
            }}
          >
            8
          </h2>
        </div>
        <div
          className="calc_key_regular"
          style={{
            backgroundColor: theme.keys.typeThree.background,
            boxShadow: `0px 5px 0px 0px ${theme.keys.typeThree.shadow}`,
          }}
        >
          <h2
            className="calc_key"
            style={{
              color: themeName === "theme1" ? "black" : theme.text.typeTwo,
            }}
          >
            9
          </h2>
        </div>
        <div
          className="calc_key_regular"
          style={{
            backgroundColor: theme.keys.typeOne.background,
            boxShadow: `0px 5px 0px 0px ${theme.keys.typeOne.shadow}`,
          }}
        >
          <h2
            className="calc_key"
            style={{
              color: theme.text.typeTwo,
            }}
          >
            DEL
          </h2>
        </div>
        {/* Second Line */}
        <div
          className="calc_key_regular"
          style={{
            backgroundColor: theme.keys.typeThree.background,
            boxShadow: `0px 5px 0px 0px ${theme.keys.typeThree.shadow}`,
          }}
        >
          <h2
            className="calc_key"
            style={{
              color: themeName === "theme1" ? "black" : theme.text.typeTwo,
            }}
          >
            4
          </h2>
        </div>
        <div
          className="calc_key_regular"
          style={{
            backgroundColor: theme.keys.typeThree.background,
            boxShadow: `0px 5px 0px 0px ${theme.keys.typeThree.shadow}`,
          }}
        >
          <h2
            className="calc_key"
            style={{
              color: themeName === "theme1" ? "black" : theme.text.typeTwo,
            }}
          >
            5
          </h2>
        </div>
        <div
          className="calc_key_regular"
          style={{
            backgroundColor: theme.keys.typeThree.background,
            boxShadow: `0px 5px 0px 0px ${theme.keys.typeThree.shadow}`,
          }}
        >
          <h2
            className="calc_key"
            style={{
              color: themeName === "theme1" ? "black" : theme.text.typeTwo,
            }}
          >
            6
          </h2>
        </div>
        <div
          className="calc_key_regular"
          style={{
            backgroundColor: theme.keys.typeThree.background,
            boxShadow: `0px 5px 0px 0px ${theme.keys.typeThree.shadow}`,
          }}
        >
          <h2
            className="calc_key"
            style={{
              color: themeName === "theme1" ? "black" : theme.text.typeTwo,
            }}
          >
            +
          </h2>
        </div>

        {/* Third Line */}
        <div
          className="calc_key_regular"
          style={{
            backgroundColor: theme.keys.typeThree.background,
            boxShadow: `0px 5px 0px 0px ${theme.keys.typeThree.shadow}`,
          }}
        >
          <h2
            className="calc_key"
            style={{
              color: themeName === "theme1" ? "black" : theme.text.typeTwo,
            }}
          >
            1
          </h2>
        </div>
        <div
          className="calc_key_regular"
          style={{
            backgroundColor: theme.keys.typeThree.background,
            boxShadow: `0px 5px 0px 0px ${theme.keys.typeThree.shadow}`,
          }}
        >
          <h2
            className="calc_key"
            style={{
              color: themeName === "theme1" ? "black" : theme.text.typeTwo,
            }}
          >
            2
          </h2>
        </div>
        <div
          className="calc_key_regular"
          style={{
            backgroundColor: theme.keys.typeThree.background,
            boxShadow: `0px 5px 0px 0px ${theme.keys.typeThree.shadow}`,
          }}
        >
          <h2
            className="calc_key"
            style={{
              color: themeName === "theme1" ? "black" : theme.text.typeTwo,
            }}
          >
            3
          </h2>
        </div>
        <div
          className="calc_key_regular"
          style={{
            backgroundColor: theme.keys.typeThree.background,
            boxShadow: `0px 5px 0px 0px ${theme.keys.typeThree.shadow}`,
          }}
        >
          <h2
            className="calc_key"
            style={{
              color: themeName === "theme1" ? "black" : theme.text.typeTwo,
            }}
          >
            -
          </h2>
        </div>

        {/* Fourth Line */}
        <div
          className="calc_key_regular"
          style={{
            backgroundColor: theme.keys.typeThree.background,
            boxShadow: `0px 5px 0px 0px ${theme.keys.typeThree.shadow}`,
          }}
        >
          <h2
            className="calc_key"
            style={{
              color: themeName === "theme1" ? "black" : theme.text.typeTwo,
            }}
          >
            .
          </h2>
        </div>
        <div
          className="calc_key_regular"
          style={{
            backgroundColor: theme.keys.typeThree.background,
            boxShadow: `0px 5px 0px 0px ${theme.keys.typeThree.shadow}`,
          }}
        >
          <h2
            className="calc_key"
            style={{
              color: themeName === "theme1" ? "black" : theme.text.typeTwo,
            }}
          >
            0
          </h2>
        </div>
        <div
          className="calc_key_regular"
          style={{
            backgroundColor: theme.keys.typeThree.background,
            boxShadow: `0px 5px 0px 0px ${theme.keys.typeThree.shadow}`,
          }}
        >
          <h2
            className="calc_key"
            style={{
              color: themeName === "theme1" ? "black" : theme.text.typeTwo,
            }}
          >
            /
          </h2>
        </div>
        <div
          className="calc_key_regular"
          style={{
            backgroundColor: theme.keys.typeThree.background,
            boxShadow: `0px 5px 0px 0px ${theme.keys.typeThree.shadow}`,
          }}
        >
          <h2
            className="calc_key"
            style={{
              color: themeName === "theme1" ? "black" : theme.text.typeTwo,
            }}
          >
            x
          </h2>
        </div>

        {/* Fith Line */}
        <div
          className="calc_key_large"
          style={{
            backgroundColor: theme.keys.typeOne.background,
            boxShadow: `0px 5px 0px 0px ${theme.keys.typeOne.shadow}`,
          }}
        >
          <h2
            className="calc_key"
            style={{
              color: theme.text.typeTwo,
            }}
          >
            RESET
          </h2>
        </div>
        <div
          className="calc_key_large"
          style={{
            backgroundColor: theme.keys.typeTwo.background,
            boxShadow: `0px 5px 0px 0px ${theme.keys.typeTwo.shadow}`,
          }}
        >
          <h2
            className="calc_key"
            style={{
              color: theme.text.typeTwo,
            }}
          >
            =
          </h2>
        </div>
      </div>
    </div>
  );
};

export default Calculator;
