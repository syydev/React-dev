import React, { useState } from 'react';
import { connect } from 'react-redux';
import { UserAction } from '../../store/user/user.action'
import './style.scss';

const Login: React.FC = (props: any) => {
  const [id, setId] = useState('');
  const [pw, setPw] = useState('');
  const push = (url: string) => props.history.push(url);

  return (
    <div className='login'>
      <h2 className='table-title'>로그인</h2>
      <form onSubmit={(event) => { event.preventDefault(); props.login({ id: id, pw: pw, push: push }) }}>
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

const mapDispatchToProps = (dispatch: any) => ({
  login: (inputUserData: any) => dispatch(UserAction.login.index(inputUserData))
});

export default connect(null, mapDispatchToProps)(Login);