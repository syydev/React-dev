import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import Pagination from './Pagination';
import './style.scss';

const PostList: React.FC = (props: any) => {
  const { totalItems, items } = props;
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
                <td><Link to={{ pathname: `/post/${index + 1}/${item.title}`, state: item }}>{item.title}</Link></td>
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

const mapStateToProps = (state: any) => ({
  items: state.table.items,
  totalItems: state.table.totalItems
});

export default connect(mapStateToProps)(PostList);