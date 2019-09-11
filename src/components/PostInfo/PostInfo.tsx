import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { TableAction } from '../../store/table/table.action';
import { IState } from '../../type';
import './style.scss';

const PostInfo: React.FC = (props: any) => {
  const id = useSelector((state: IState) => state.user.id);
  const item = useSelector((state: IState) => state.table.itemInfo);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(TableAction.getData.index({ _id: props.match.params.id }));
  }, []);

  return (
    <div className='post-info'>
      <table>
        <tbody>
          <tr>
            <td>제목</td>
            <td>{item.title}</td>
          </tr>
          <tr>
            <td>날짜</td>
            <td>{item.creationDate}</td>
          </tr>
          <tr>
            <td>작성자</td>
            <td>{item.userId}</td>
          </tr>
          <tr>
            <td>내용</td>
            <td>{item.content}</td>
          </tr>
        </tbody>
      </table>
      {(item.userId == id) ? (
        <div className='writer-area'>
          <Link className='button' to={{ pathname: `/post/${item._id}/${item.title}/modification`, state: item }}>수정</Link>
          <a className='button' onClick={() => dispatch(TableAction.removeData.index({ _id: item._id }))}>삭제</a>
        </div>
      ) : null
      }
    </div>
  );
};

export default PostInfo;