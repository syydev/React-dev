import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { TableAction } from '../../store/table/table.action';
import { IState } from '../../type';
import './style.scss';

const Registration: React.FC = () => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const dispatch = useDispatch();
  const id = useSelector((state: IState) => state.user.id);

  return (
    <div className='registration'>
      <h2 className='table-title'>등록하기</h2>
      <form onSubmit={(event) => { event.preventDefault(); dispatch(TableAction.addData.index({ title: title, content: content, userId: id })) }}>
        <table>
          <tbody>
            <tr>
              <td><input type="text" placeholder="제목" onChange={event => setTitle(event.target.value)} required /></td>
            </tr>
            <tr>
              <td><textarea placeholder="내용을 작성하세요" onChange={event => setContent(event.target.value)} required></textarea></td>
            </tr>
          </tbody>
        </table>
        <button type='submit' className='submit-button'>등록</button>
      </form>
    </div>
  );
}

export default Registration;