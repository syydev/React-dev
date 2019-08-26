import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import sampleData from './SampleData';
import Pagination from './Pagination';
import './style.scss';

const PostList: React.FC = () => {
  const items: any[] = useSelector((state: any) => state.paginationReducer.items);
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
              <td>작성자</td>
              <td>조회수</td>
            </tr>
          </thead>
          <tbody>
            {items.map(post =>
              <tr className='table-content'>
                <td>{post.id}</td>
                <td>{post.date}</td>
                <td>{post.title}</td>
                <td>{post.userID}</td>
                <td>{post.viewNum}</td>
              </tr>
            )}
          </tbody>
        </table>
        <Link className='button' to='/post/registration'>글쓰기</Link>
      </div>
      <div>
        <Pagination items={sampleData} pageSize={pageSize} />
      </div>
    </div>
  );
}

export default PostList;