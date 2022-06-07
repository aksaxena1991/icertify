import React from 'react';

const CounterComponent = ( {count, handleIncrementClick, handleDecrementClick}:any ) => (
  <div>
    <h1>Hello world Redux Saga! {count}</h1>
    <button onClick={handleDecrementClick}>Decrement</button>
    <button onClick={handleIncrementClick}>Increment</button>
  </div>
);
export default CounterComponent;