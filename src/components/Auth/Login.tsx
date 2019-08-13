import React, { useState } from 'react';
import { useDispatch } from 'react-redux';

const Login: React.FC = () => {
  const dispatch = useDispatch();
  const [inputID, setInputID] = useState('');
  const [inputPW, setInputPW] = useState('');

  return (
    <React.Fragment>
      <form>
        <input type='text' onChange={event => setInputID(event.target.value)} />
        <input type='password' onChange={event => setInputPW(event.target.value)} />
        <button type='submit' onClick={() => dispatch({ type: 'LOGIN_REQUEST', id: inputID, pw: inputPW })}>Login</button>
      </form>
    </React.Fragment>
  );
}

export default Login;