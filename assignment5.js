import React, { useState } from 'react';

const Calculator = () => {
  const [num1, setNum1] = useState('');
  const [num2, setNum2] = useState('');
  const [result, setResult] = useState('');
  const [operation, setOperation] = useState('');

  const handleCalculation = (op) => {
    const n1 = parseFloat(num1);
    const n2 = parseFloat(num2);
    
    if (isNaN(n1) || isNaN(n2)) {
      setResult('Please enter valid numbers');
      setOperation('');
      return;
    }

    let calcResult;
    switch (op) {
      case 'add':
        calcResult = n1 + n2;
        setOperation('Addition');
        break;
      case 'subtract':
        calcResult = n1 - n2;
        setOperation('Subtraction');
        break;
      case 'multiply':
        calcResult = n1 * n2;
        setOperation('Multiplication');
        break;
      case 'divide':
        if (n2 === 0) {
          setResult('Cannot divide by zero');
          setOperation('Division');
          return;
        }
        calcResult = n1 / n2;
        setOperation('Division');
        break;
      default:
        return;
    }
    
    setResult(calcResult.toString());
  };

  const clearAll = () => {
    setNum1('');
    setNum2('');
    setResult('');
    setOperation('');
  };

  return (
    <div className="max-w-md mx-auto mt-8 p-6 bg-white rounded-lg shadow-lg border">
      <h1 className="text-2xl font-bold text-center mb-6 text-gray-800">Calculator</h1>
      
      {/* Input Fields */}
      <div className="space-y-4 mb-6">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            First Number
          </label>
          <input
            type="number"
            value={num1}
            onChange={(e) => setNum1(e.target.value)}
            placeholder="Enter first number"
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
        </div>
        
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Second Number
          </label>
          <input
            type="number"
            value={num2}
            onChange={(e) => setNum2(e.target.value)}
            placeholder="Enter second number"
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
        </div>
      </div>

      {/* Operation Buttons */}
      <div className="grid grid-cols-2 gap-3 mb-6">
        <button
          onClick={() => handleCalculation('add')}
          className="px-4 py-2 bg-green-500 text-white rounded-md hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 transition-colors"
        >
          + Add
        </button>
        
        <button
          onClick={() => handleCalculation('subtract')}
          className="px-4 py-2 bg-red-500 text-white rounded-md hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 transition-colors"
        >
          - Subtract
        </button>
        
        <button
          onClick={() => handleCalculation('multiply')}
          className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-colors"
        >
          × Multiply
        </button>
        
        <button
          onClick={() => handleCalculation('divide')}
          className="px-4 py-2 bg-purple-500 text-white rounded-md hover:bg-purple-600 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 transition-colors"
        >
          ÷ Divide
        </button>
      </div>

      {/* Clear Button */}
      <button
        onClick={clearAll}
        className="w-full mb-4 px-4 py-2 bg-gray-500 text-white rounded-md hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2 transition-colors"
      >
        Clear All
      </button>

      {/* Result Display */}
      <div className="p-4 bg-gray-50 rounded-md border">
        <div className="text-sm text-gray-600 mb-1">Result:</div>
        <div className="text-lg font-semibold text-gray-800">
          {result || 'No calculation yet'}
        </div>
        {operation && result && !result.includes('Please') && !result.includes('Cannot') && (
          <div className="text-sm text-gray-500 mt-1">
            Operation: {operation}
          </div>
        )}
      </div>
    </div>
  );
};

export default Calculator;
