import React, { useState } from 'react';
import { connect } from 'react-redux';
import { TableAction } from '../../store/table/table.action';
import './style.scss';

const Registration: React.FC = (props: any) => {
  const { addData, id } = props;
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  return (
    <div className='registration'>
      <h2 className='table-title'>등록하기</h2>
      <form onSubmit={(event) => { event.preventDefault(); addData({ title: title, content: content, userId: id }) }}>
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

const mapStateToProps = (state: any) => ({
  id: state.user.id
});

const mapDispatchToProps = (dispatch: any) => ({
  addData: (inputData: any) => dispatch(TableAction.addData.index(inputData))
});

export default connect(mapStateToProps, mapDispatchToProps)(Registration);