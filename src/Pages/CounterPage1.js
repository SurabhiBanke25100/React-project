import React, { useReducer } from 'react';
import Button from '../components/Button';
import Panel from '../components/Panel';
import {produce} from 'immer';

// Reducer function using immer function for updating state instead of creating new state without using immer!

const reducer = (state, action)=>{
  switch (action.type) {
    case "INCREMENT":
        state.count = state.count + 1
        return;
    case "DECREMENT":
        state.count = state.count - 1
        return;
    case "change-value-to-add":
        state.valuetoadd = action.payload
        return;
    case "ADD":
        state.count = state.count + state.valuetoadd;
        state.valuetoadd = 0;
        return;
      
    default:
      return ;
  }
};

function CounterPage1({ initialCount }) {
  // Initialize state using useReducer
  const [state, dispatch] = useReducer(produce(reducer), {
    count: initialCount,
    valuetoadd: 0
  }
  
);
  // Function to handle incrementing count
  const increment = () => {
    dispatch({ type: "INCREMENT" });
  };

  // Function to handle decrementing count
  const decrement = () => {
    dispatch({ type: "DECREMENT" });
  };

  // Function to handle changing the value to add
  const handleChange = (event) => {
    const value = parseInt(event.target.value) || 0;
    dispatch({
        type: "change-value-to-add",
        payload : value,
    });
    console.log(value);
    
  };

  // Function to handle submitting the form (adding the value to count)
  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch({
      type : "ADD",
      payload : state.count + state.valuetoadd
    });

  };

  return (
    <Panel className="m-3">
      <h1 className="text-lg">Count is {state.count}</h1>
      <div className="flex flex-row">
        <Button onClick={increment}>Increment</Button>
        <Button onClick={decrement}>Decrement</Button>
      </div>
      <form onSubmit={handleSubmit}>
        <label>Add a Lot!</label>
        <input
          value={state.valuetoadd || ""}
          onChange={handleChange}
          type="number"
          className="p-1 m-3 bg-gray-50 border border-gray-300"
        />
        <Button type="submit">Add!</Button>
      </form>  
    </Panel>
  );
}

export default CounterPage1;
