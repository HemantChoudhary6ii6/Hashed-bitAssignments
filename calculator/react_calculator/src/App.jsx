import React, { useState } from "react";
import "./app.css";

function App() {
  const [num1, setNum1] = useState("");
  const [num2, setNum2] = useState("");
  const [result, setResult] = useState("");

  const calculate = (operation) => {
    const a = parseFloat(num1);
    const b = parseFloat(num2);
    if (isNaN(a) || isNaN(b)) {
      setResult("Enter valid numbers");
      return;
    }

    switch (operation) {
      case "add":
        setResult(a + b);
        break;
      case "sub":
        setResult(a - b);
        break;
      case "mul":
        setResult(a * b);
        break;
      case "div":
        if (b === 0) {
          setResult("Cannot divide by zero");
        } else {
          setResult(a / b);
        }
        break;
      default:
        setResult("Unknown operation");
    }
  };

  return (
    <div className="calculator">
      <input
        type="number"
        placeholder="Enter first number"
        value={num1}
        onChange={(e) => setNum1(e.target.value)}
      />
      <input
        type="number"
        placeholder="Enter second number"
        value={num2}
        onChange={(e) => setNum2(e.target.value)}
      />

      <div>
        <button onClick={() => calculate("add")}>+</button>
        <button onClick={() => calculate("sub")}>−</button>
        <button onClick={() => calculate("mul")}>×</button>
        <button onClick={() => calculate("div")}>÷</button>
      </div>

      <div className="result">Result: {result}</div>
    </div>
  );
}

export default App;
