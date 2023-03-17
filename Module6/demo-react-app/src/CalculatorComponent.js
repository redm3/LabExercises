import React, { useState } from 'react';

const Calculator = () => {
  const [number1, setNumber1] = useState('');
  const [number2, setNumber2] = useState('');
  const [operator, setOperator] = useState('');
  const [result, setResult] = useState('');

  const handleNumber1Change = (event) => {
    setNumber1(event.target.value);
  };

  const handleNumber2Change = (event) => {
    setNumber2(event.target.value);
  };

  const handleOperatorChange = (event) => {
    setOperator(event.target.value);
  };

  const handleCalculate = () => {
    let num1 = parseFloat(number1);
    let num2 = parseFloat(number2);
    let calculatedResult;

    switch (operator) {
      case '+':
        calculatedResult = num1 + num2;
        break;
      case '-':
        calculatedResult = num1 - num2;
        break;
      case '*':
        calculatedResult = num1 * num2;
        break;
      case '/':
        calculatedResult = num1 / num2;
        break;
      default:
        calculatedResult = '';
        break;
    }

    setResult(calculatedResult);
  };

  return (
    <div>
      <input type="number" value={number1} onChange={handleNumber1Change} />
      <select value={operator} onChange={handleOperatorChange}>
        <option value="">--Select Operator--</option>
        <option value="+">+</option>
        <option value="-">-</option>
        <option value="*">*</option>
        <option value="/">/</option>
      </select>
      <input type="number" value={number2} onChange={handleNumber2Change} />
      <button onClick={handleCalculate}>Calculate</button>
      <p>{result}</p>
    </div>
  );
}

export default Calculator;
