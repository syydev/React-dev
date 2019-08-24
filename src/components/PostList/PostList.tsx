import React from 'react';
import sampleData from './SampleData';
import Pagination from './Pagination';
import './style.scss';
import { useSelector } from 'react-redux';

const PostList: React.FC = () => {
  const items: any[] = useSelector((state: any) => state.paginationReducer.items);
  const pageSize = 10;

  return (
    <div>
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
      <Pagination items={sampleData} pageSize={pageSize} />
    </div>
  );
}

export default PostList;