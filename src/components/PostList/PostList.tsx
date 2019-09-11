import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import Pagination from './Pagination';
import { IState } from '../../type';
import './style.scss';

const PostList: React.FC = () => {
  const totalItems = useSelector((state: IState) => state.table.totalItems); 
  const items = useSelector((state: IState) => state.table.items);
  const pageSize = 10;

  return (
    <div>
      <div className='post-list'>
        <table>
          <thead>
            <tr className='table-header'>
              <td>번호</td>
              <td>날짜</td>
              <td>제목</td>
              <td>내용</td>
              <td>작성자</td>
            </tr>
          </thead>
          <tbody>
            {items.map((item: any, index: number) =>
              <tr className='table-content'>
                <td>{index + 1}</td>
                <td>{item.creationDate}</td>
                <td><Link to={`/post/${item._id}/${item.title}`} > {item.title}</Link></td>
                <td>{item.content}</td>
                <td>{item.userId}</td>
              </tr>
            )}
          </tbody>
        </table>
        <Link className='button' to='/post/registration'>글쓰기</Link>
      </div>
      <div>
        <Pagination totalItems={totalItems} pageSize={pageSize} />
      </div>
    </div>
  );
};

export default PostList;