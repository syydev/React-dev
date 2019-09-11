import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { UserAction } from '../../store/user/user.action'
import './style.scss';

const Login: React.FC = () => {
  const [id, setId] = useState('');
  const [pw, setPw] = useState('');
  const dispatch = useDispatch();

  return (
    <div className='login'>
      <h2 className='table-title'>로그인</h2>
      <form onSubmit={(event) => { event.preventDefault(); dispatch(UserAction.login.index({ id: id, pw: pw })) }}>
        <table>
          <tbody>
            <tr>
              <td><input type="text" placeholder="ID" onChange={event => setId(event.target.value)} required /></td>
            </tr>
            <tr>
              <td><input type="password" placeholder="Password" onChange={event => setPw(event.target.value)} required /></td>
            </tr>
          </tbody>
        </table>
        <button type='submit' className='submit-button'>로그인</button>
      </form>
    </div>
  );
};

export default Login;