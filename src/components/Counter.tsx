import React, { useReducer } from 'react';
import counterReducer from '../reducers/counter'

type Props = {}

const Counter: React.FC<Props> = props => {
  const [state, dispatch] = useReducer(counterReducer, { count: 0 });
  return <>
    <p>{state.count}</p>
    <button onClick={() => dispatch({ type: 'increment' })}>+</button>
    <button onClick={() => dispatch({ type: 'decrement' })}>-</button>
  </>
}

export default Counter;