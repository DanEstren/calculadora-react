import React, { useState } from "react";
import "./styles.css";

function App() {
  const [display, setDisplay] = useState("0");

  const addToDisplay = (value) => {
    setDisplay((prev) => {
      if (prev === "0" && value !== ".") return value;
      return prev + value;
    });
  };

  const clearDisplay = () => {
    setDisplay("0");
  };

  const calculate = () => {
    try {
      const result = eval(display.replace("×", "*"));
      setDisplay(result.toString());
    } catch {
      setDisplay("Erro");
      setTimeout(clearDisplay, 1000);
    }
  };

  return (
    <div className="calculator">
      <div className="display">{display}</div>
      <div className="buttons">
        <button className="btn operator" onClick={() => addToDisplay("/")}>
          /
        </button>
        <button className="btn operator" onClick={() => addToDisplay("×")}>
          ×
        </button>
        <button className="btn operator" onClick={() => addToDisplay("+")}>
          +
        </button>

        <button className="btn operator" onClick={() => addToDisplay("-")}>
          -
        </button>
        <button className="btn" onClick={() => addToDisplay("7")}>
          7
        </button>
        <button className="btn" onClick={() => addToDisplay("8")}>
          8
        </button>
        <button className="btn" onClick={() => addToDisplay("9")}>
          9
        </button>
        <button className="btn clear" onClick={clearDisplay}>
          C
        </button>

        <button className="btn" onClick={() => addToDisplay("4")}>
          4
        </button>
        <button className="btn" onClick={() => addToDisplay("5")}>
          5
        </button>
        <button className="btn" onClick={() => addToDisplay("6")}>
          6
        </button>
        <button className="btn" onClick={() => addToDisplay("1")}>
          1
        </button>

        <button className="btn" onClick={() => addToDisplay("2")}>
          2
        </button>
        <button className="btn" onClick={() => addToDisplay("3")}>
          3
        </button>
        <button className="btn" onClick={() => addToDisplay(".")}>
          .
        </button>
        <button className="btn zero" onClick={() => addToDisplay("0")}>
          0
        </button>

        <button className="btn equals" onClick={calculate}>
          =
        </button>
      </div>
    </div>
  );
}

export default App;
