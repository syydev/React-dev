import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import './style.scss';

const Login: React.FC = () => {
  const dispatch = useDispatch();
  const [id, setId] = useState('');
  const [pw, setPw] = useState('');

  return (
    <div className='login'>
      <h2 className='table-title'>로그인</h2>
      <table>
        <tbody>
          <tr>
            <td><input type="text" placeholder="ID" onChange={event => setId(event.target.value)} required /></td>
          </tr>
          <tr>
            <td><input type="password" placeholder="Password" onChange={event => setPw(event.target.value)} required></input></td>
          </tr>
        </tbody>
      </table>
      <a className='button' onClick={() => dispatch({ type: 'LOGIN_REQUEST', id: id, pw: pw })}>로그인</a>
    </div>
  );
}

export default Login;