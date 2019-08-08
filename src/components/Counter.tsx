import React, { useReducer } from 'react';
import counterReducer from '../reducers/counter'

const Counter: React.FC = () => {
  const [state, dispatch] = useReducer(counterReducer, { count: 0 });
  return (
    <React.Fragment>
      <p>{state.count}</p>
      <button onClick={() => dispatch({ type: 'increment' })}>+</button>
      <button onClick={() => dispatch({ type: 'decrement' })}>-</button>
      <button onClick={() => dispatch({ type: 'reset' })}>reset</button>
    </React.Fragment>
  );
}

export default Counter;