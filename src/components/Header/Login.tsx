import React, { useState, useReducer } from 'react';
import loginReducer, { initialState } from '../../reducers/login'

const LoginComponent: React.FC = () => {
  const [inputID, setInputID] = useState('');
  const [inputPW, setInputPW] = useState('');
  const [state, dispatch] = useReducer(loginReducer, initialState);

  if (state.login)
    return (
      <React.Fragment>
        <text>{state.id}</text>
        <button onClick={() => dispatch({ type: 'LOGOUT' })}>Logout</button>
      </React.Fragment>
    );
  else
    return (
      <React.Fragment>
        <input type='text' onChange={event => setInputID(event.target.value)} />
        <input type='password' onChange={event => setInputPW(event.target.value)} />
        <button onClick={() => dispatch({ type: 'LOGIN_REQUEST', id: inputID, pw: inputPW })}>Login</button>
      </React.Fragment>
    );
}

export default LoginComponent;