import '../styles/calculator.scss';
import { useState } from 'react';
import calculate from '../logic/calculate';

const Calculator = () => {
  const [calcObj, setCalcObj] = useState({
    total: '0',
    next: null,
    operation: null,
  });

  const [result, setResult] = useState('0');

  function updateResult(total, next) {
    if (next) {
      return next;
    }
    if (total) {
      return total;
    }
    return '0';
  }

  function handleClick(event) {
    const buttonName = event.target.innerText;
    const { total, next, operation } = calculate(calcObj, buttonName);

    setCalcObj({ total, next, operation });
    setResult(updateResult(total, next));
  }

  return (
    <div className="calculator">
      <div className="result">{result}</div>
      <button onClick={handleClick} className="btn gr-bg" type="button">AC</button>
      <button onClick={handleClick} className="btn gr-bg" type="button">+/-</button>
      <button onClick={handleClick} className="btn gr-bg" type="button">%</button>
      <button onClick={handleClick} className="btn or-bg" type="button">÷</button>
      <button onClick={handleClick} className="btn gr-bg" type="button">7</button>
      <button onClick={handleClick} className="btn gr-bg" type="button">8</button>
      <button onClick={handleClick} className="btn gr-bg" type="button">9</button>
      <button onClick={handleClick} className="btn or-bg" type="button">x</button>
      <button onClick={handleClick} className="btn gr-bg" type="button">4</button>
      <button onClick={handleClick} className="btn gr-bg" type="button">5</button>
      <button onClick={handleClick} className="btn gr-bg" type="button">6</button>
      <button onClick={handleClick} className="btn or-bg" type="button">-</button>
      <button onClick={handleClick} className="btn gr-bg" type="button">1</button>
      <button onClick={handleClick} className="btn gr-bg" type="button">2</button>
      <button onClick={handleClick} className="btn gr-bg" type="button">3</button>
      <button onClick={handleClick} className="btn or-bg" type="button">+</button>
      <button onClick={handleClick} className="btn gr-bg double" type="button">0</button>
      <button onClick={handleClick} className="btn gr-bg" type="button">.</button>
      <button onClick={handleClick} className="btn or-bg" type="button">=</button>
    </div>
  );
};

export default Calculator;
