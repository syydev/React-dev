import React, { useState } from 'react';
import { connect } from 'react-redux';
import { UserAction } from '../../store/user/user.action'
import './style.scss';

const Login: React.FC = (props: any) => {
  const [id, setId] = useState('');
  const [pw, setPw] = useState('');

  return (
    <div className='login'>
      <h2 className='table-title'>로그인</h2>
      <table>
        <tbody>
          <tr>
            <td><input type="text" placeholder="ID" onChange={event => setId(event.target.value)} required
              onKeyDown={event => { if (event.key === 'Enter') props.login({ id: id, pw: pw }); }} /></td>
          </tr>
          <tr>
            <td><input type="password" placeholder="Password" onChange={event => setPw(event.target.value)} required
              onKeyDown={event => { if (event.key === 'Enter') props.login({ id: id, pw: pw }); }}></input></td>
          </tr>
        </tbody>
      </table>
      <a className='button' onClick={() => props.login({ id: id, pw: pw })}>로그인</a>
    </div>
  );
};

const mapDispatchToProps = (dispatch: any) => ({
  login: (inputUserData: any) =>
    dispatch(UserAction.login.index(inputUserData))
});

export default connect(null, mapDispatchToProps)(Login);