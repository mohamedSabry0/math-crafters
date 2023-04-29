import '../styles/calculator.scss';
import { useState } from 'react';
import calculate from '../logic/calculate';
import Result from './Result';

const Calculator = () => {
  const [calcObj, setCalcObj] = useState({
    total: '0',
    next: null,
    operation: null,
  });

  function handleClick(event) {
    const buttonName = event.target.innerText;

    setCalcObj(calculate(calcObj, buttonName));
  }

  return (
    <div className="calculator">
      <Result total={calcObj.total} next={calcObj.next} />
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
