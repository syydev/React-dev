import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { TableAction } from '../../store/table/table.action';
import './style.scss';

const Modification: React.FC = (props: any) => {
  const [title, setTitle] = useState(props.location.state.title);
  const [content, setContent] = useState(props.location.state.content);
  const { _id, userId } = props.location.state;
  const dispatch = useDispatch();

  return (
    <div className='modification'>
      <h2 className='table-title'>수정하기</h2>
      <form onSubmit={(event) => { event.preventDefault(); dispatch(TableAction.modifyData.index({ _id: _id, title: title, content: content, userId: userId })) }}>
        <table>
          <tbody>
            <tr>
              <td><input type="text" placeholder="제목" value={title} onChange={event => setTitle(event.target.value)} required /></td>
            </tr>
            <tr>
              <td><textarea placeholder="내용을 작성하세요" value={content} onChange={event => setContent(event.target.value)} required></textarea></td>
            </tr>
          </tbody>
        </table>
        <button type='submit' className='submit-button'>수정</button>
        <button type='button' className='submit-button' onClick={() => props.history.goBack()}>취소</button>
      </form>
    </div>
  );
}

export default Modification;