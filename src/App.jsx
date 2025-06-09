import React, { useState } from 'react';
import './app.css';

function App() {
  const [num1, setNum1] = useState('');
  const [num2, setNum2] = useState('');
  const [result, setResult] = useState(null);

  const parseInput = (value) => parseFloat(value) || 0;

  const calculate = (operation) => {
    const a = parseInput(num1);
    const b = parseInput(num2);

    let res;
    switch (operation) {
      case 'add':
        res = a + b;
        break;
      case 'subtract':
        res = a - b;
        break;
      case 'multiply':
        res = a * b;
        break;
      case 'divide':
        res = b !== 0 ? a / b : 'Cannot divide by zero';
        break;
      default:
        res = 'Invalid operation';
    }

    setResult(res);
  };

  return (
    <div className="calculator">
      <h2>React Calculator</h2>
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
        <button onClick={() => calculate('add')}>Add</button>
        <button onClick={() => calculate('subtract')}>Subtract</button>
        <button onClick={() => calculate('multiply')}>Multiply</button>
        <button onClick={() => calculate('divide')}>Divide</button>
      </div>
      <div className="result">Result: {result}</div>
    </div>
  );
}

export default App;
