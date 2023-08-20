"use client"
import React, { useReducer } from 'react';

const reducer = (state:any, action:any) => {
  switch (action.type) {
    case "addition":
      return { count1: state.count1 + state.count2,count2:0 };
    case "deletion":
      return { count1: state.count1 - state.count2,count2:0 };
    case "multiplication":
      return { count1: state.count1 * state.count2,count2:0 };
    case "divide":
      return { count1: state.count1 / state.count2,count2:0 };
    case "setCount1":
      return { ...state, count1: action.value };
    case "setCount2":
      return { ...state, count2: action.value };
    default:
      return state;
  }
};

const Operation = () => {
  const [state, dispatch] = useReducer(reducer, { count1: 0, count2: 0 });

  return (
    <div>
      <h1>Calculator</h1>
      <div>
        <input
          type="number"
          value={state.count1}
          onChange={(e) => dispatch({ type: "setCount1", value: parseInt(e.target.value) })}
        />
        <input
          type="number"
          value={state.count2}
          onChange={(e) => dispatch({ type: "setCount2", value: parseInt(e.target.value) })}
        />
      </div>
      <div>
        <button className='bg-black text-white px-2 py-2' onClick={() => dispatch({ type: "addition" })}>Addition</button>
        <button className='bg-black text-white px-2 py-2' onClick={() => dispatch({ type: "deletion" })}>Subtraction</button>
        <button className='bg-black text-white px-2 py-2' onClick={() => dispatch({ type: "multiplication" })}>Multiplication</button>
        <button className='bg-black text-white px-2 py-2' onClick={() => dispatch({ type: "divide" })}>Division</button>
      </div>
      <div>
        <p>Result: {state.count1}</p>
      </div>
    </div>
  );
};

export default Operation;
