import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import Pagination from './Pagination';
import { IState } from '../../type';
import styled from 'styled-components';
import { LinkButtonRed } from '../../utils/GlobalStyles';

const PostList: React.FC = () => {
  const totalItems = useSelector((state: IState) => state.table.totalItems);
  const items = useSelector((state: IState) => state.table.items);
  const pageSize = 10;

  return (
    <Container>
      <TableTitle>Post List</TableTitle>
      <Table>
        <thead>
          <TableHeader>
            <Td>번호</Td>
            <Td>날짜</Td>
            <Td>제목</Td>
            <Td>내용</Td>
            <Td>작성자</Td>
          </TableHeader>
        </thead>
        <tbody>
          {items.map((item: any, index: number) =>
            <TableContent>
              <Td>{index + 1}</Td>
              <Td>{item.creationDate}</Td>
              <Td><Link to={`/post/${item._id}/${item.title}`} > {item.title}</Link></Td>
              <Td>{item.content}</Td>
              <Td>{item.userId}</Td>
            </TableContent>
          )}
        </tbody>
      </Table>
      <LinkButtonRed to='/post/registration'>글쓰기</LinkButtonRed>
      <Pagination totalItems={totalItems} pageSize={pageSize} />
    </Container>
  );
};

const Container = styled.div`
  text-align: center;
`;

const TableTitle = styled.h2`
`;

const Table = styled.table`
  border-top: 1px solid #ddd;
  border-bottom: 1px solid #ddd;
  padding: 8px 10px 8px 10px;
  text-align: center;
  background: white;
  border-collapse: collapse;
  margin: 30px auto;
  width: 80%;
  font-size: 18px;
`;

const Tr = styled.tr`
  border-top: 1px solid #ddd;
  border-bottom: 1px solid #ddd;
  padding: 8px 10px 8px 10px;
  text-align: center;
  &:nth-child(even) {
    background: #f2f2f2;
  }
`;

const Td = styled.td`
  border-top: 1px solid #ddd;
  border-bottom: 1px solid #ddd;
  padding: 8px 10px 8px 10px;
  text-align: center;
  max-width: 0px;
`;

const TableHeader = styled(Tr)`
  border-top: 2px solid #ccc;
  border-bottom: 2px solid #ccc;
  font-weight: bold;
`;

const TableContent = styled(Tr)`
  &:hover {
    background: gray;
  }
`;

export default PostList;