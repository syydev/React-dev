import React from 'react';
import postList from './SampleData'
import './style.scss';

const PostList: React.FC = () => {
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
          {postList.map(post =>
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
    </div>
  );
}

export default PostList;