import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import './style.scss'

const Registration: React.FC = () => {
  const dispatch = useDispatch();
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  return (
    <div className='registration'>
      <h2 className='table-title'>등록하기</h2>
      <form>
        <table>
          <tbody>
            <tr>
              <td><input type="text" placeholder="제목" onChange={event => setTitle(event.target.value)} required /></td>
            </tr>
            <tr>
              <td><input type="number" placeholder="가격 (원)" required /></td>
            </tr>
            <tr>
              <td><textarea placeholder="내용을 작성하세요" onChange={event => setContent(event.target.value)} required></textarea></td>
            </tr>
          </tbody>
        </table>
        <a className='button' onClick={() => alert(title)}>등록</a>
      </form>
    </div>
  );
}

export default Registration;