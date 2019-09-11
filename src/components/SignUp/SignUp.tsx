import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { UserAction } from '../../store/user/user.action';
import './style.scss';

const SignUp: React.FC = () => {
  const [id, setId] = useState('');
  const [pw, setPw] = useState('');
  const [name, setName] = useState('');
  const dispatch = useDispatch();

  return (
    <div className='signUp'>
      <h2 className='table-title'>회원가입</h2>
      <form onSubmit={(event) => { event.preventDefault(); dispatch(UserAction.signUp.index({ id: id, pw: pw, name: name })) }}>
        <table>
          <tbody>
            <tr>
              <td><input type="text" placeholder="ID" onChange={event => setId(event.target.value)} required /></td>
            </tr>
            <tr>
              <td><input type="password" placeholder="Password" onChange={event => setPw(event.target.value)} required /></td>
            </tr>
            <tr>
              <td><input type="text" placeholder="Name" onChange={event => setName(event.target.value)} required /></td>
            </tr>
          </tbody>
        </table>
        <button type='submit' className='submit-button'>회원가입</button>
      </form>
    </div>
  );
};

export default SignUp;