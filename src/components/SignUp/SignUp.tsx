import React, { useState } from 'react';
import { connect } from 'react-redux';
import { UserAction } from '../../store/user/user.action'
import './style.scss';

const SignUp: React.FC = (props: any) => {
  const [id, setId] = useState('');
  const [pw, setPw] = useState('');
  const [name, setName] = useState('');

  return (
    <div className='signUp'>
      <h2 className='table-title'>회원가입</h2>
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
      <a className='button' onClick={() => props.signUp({ id: id, pw: pw, name: name })}>회원가입</a>
    </div>
  );
};

const mapDispatchToProps = (dispatch: any) => ({
  signUp: (inputUserData: any) =>
    dispatch(UserAction.signUp.index(inputUserData))
});

export default connect(null, mapDispatchToProps)(SignUp);