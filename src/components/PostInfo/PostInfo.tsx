import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { TableAction } from '../../store/table/table.action';
import './style.scss';

const PostInfo: React.FC = (props: any) => {
  const { id, removeData } = props;
  const itemInfo = props.location.state;

  return (
    <div className='post-info'>
      <table>
        <tbody>
          <tr>
            <td>제목</td>
            <td>{itemInfo.title}</td>
          </tr>
          <tr>
            <td>날짜</td>
            <td>{itemInfo.creationDate}</td>
          </tr>
          <tr>
            <td>작성자</td>
            <td>{itemInfo.userId}</td>
          </tr>
          <tr>
            <td>내용</td>
            <td>{itemInfo.content}</td>
          </tr>
        </tbody>
      </table>
      {(itemInfo.userId == id) ? (
        <div className='writer-area'>
          <Link className='button' to='/post/modification'>수정</Link>
          <a className='button' onClick={() => removeData({ _id: itemInfo._id })}>삭제</a>
        </div>
      ) : null
      }
    </div>
  );
};

const mapStateToProps = (state: any) => ({
  id: state.user.id
});

const mapDispatchToProps = (dispatch: any) => ({
  removeData: (_id: string) => dispatch(TableAction.removeData.index(_id))
});

export default connect(mapStateToProps, mapDispatchToProps)(PostInfo);