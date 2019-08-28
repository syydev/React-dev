import React, { useState } from 'react';
import { POST } from '../../utils';
import './style.scss';

const SignUp: React.FC = () => {
  const [id, setId] = useState('');
  const [pw, setPw] = useState('');
  const [name, setName] = useState('');

  return (
    <div className='signUp'>
      <h2 className='table-title'>회원가입</h2>
      <form>
        <table>
          <tbody>
            <tr>
              <td><input type="text" placeholder="ID" onChange={event => setId(event.target.value)} required /></td>
            </tr>
            <tr>
              <td><input type="password" placeholder="Password" onChange={event => setPw(event.target.value)} required></input></td>
            </tr>
            <tr>
              <td><input type="text" placeholder="Name" onChange={event => setName(event.target.value)} required /></td>
            </tr>
          </tbody>
        </table>
        <a className='button' onClick={() => POST('users', { id: id, pw: pw, name: name })}>회원가입</a>
      </form>
    </div>
  );
}

export default SignUp;