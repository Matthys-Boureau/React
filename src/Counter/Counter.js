import { useState } from 'react';
import './Counter.css';

function Counter() {
const [count, setcount] = useState(0);  

const increment = () => {
  setcount(count+1);
};

const decrement = () => {
  setcount(count-1);
};

  return (
    <>
      <h1>Compte</h1>
      <div>
        <span className={count > 5 ? "Count-too-high": ""}> {count}</span></div>
      <div className='buttonGroup'>
        <button onClick={increment} className="ButtonPlus">
          +
        </button>
        <button onClick={decrement} className="ButtonMoins">
          -
        </button>
      </div>
      {count > 5 ? (
      <div className='warningMessage'>Le compte est trop élevé</div>) : null}
    </>
  );
}

export default Counter;
