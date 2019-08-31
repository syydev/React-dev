import React, { useState } from 'react';
import { connect } from 'react-redux';
import { UserAction } from '../../store/user/user.action'
import './style.scss';

const SignUp: React.FC = (props: any) => {
  const [id, setId] = useState('');
  const [pw, setPw] = useState('');
  const [name, setName] = useState('');
  const push = (url: string) => props.history.push(url);

  return (
    <div className='signUp'>
      <h2 className='table-title'>회원가입</h2>
      <form onSubmit={(event) => { event.preventDefault(); props.signUp({ id: id, pw: pw, name: name, push: push }) }}>
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

const mapDispatchToProps = (dispatch: any) => ({
  signUp: (inputUserData: any) => dispatch(UserAction.signUp.index(inputUserData))
});

export default connect(null, mapDispatchToProps)(SignUp);