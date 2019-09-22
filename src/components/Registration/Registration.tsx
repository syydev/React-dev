import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { TableAction } from '../../store/table/table.action';
import { IState } from '../../type';
import styled from 'styled-components';
import { ButtonRed } from '../../utils/GlobalStyles';

const Registration: React.FC = () => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const dispatch = useDispatch();
  const id = useSelector((state: IState) => state.user.id);

  return (
    <Container>
      <TableTitle>등록하기</TableTitle>
      <form onSubmit={(event) => { event.preventDefault(); dispatch(TableAction.addData.index({ title: title, content: content, userId: id })) }}>
        <Table>
          <tbody>
            <Tr>
              <Td><Input type="text" placeholder="제목" onChange={event => setTitle(event.target.value)} required /></Td>
            </Tr>
            <Tr>
              <Td><TextArea placeholder="내용을 작성하세요" onChange={event => setContent(event.target.value)} required></TextArea></Td>
            </Tr>
          </tbody>
        </Table>
        <ButtonRed type='submit'>등록</ButtonRed>
      </form>
    </Container>
  );
}

const Container = styled.div`
  text-align: center;
`;

const TableTitle = styled.h2`
`;

const Table = styled.table`
  border-top: 1px solid #ddd;
  padding: 8px 10px 8px 10px;
  text-align: center;
  background: white;
  border-collapse: collapse;
  margin: 15px auto;
  width: 50%;
`;

const Tr = styled.tr`
  border-top: 1px solid #ddd;
  padding: 8px 10px 8px 10px;
  text-align: center;
`;

const Td = styled.td`
  border-top: 1px solid #ddd;
  padding: 8px 10px 8px 10px;
  text-align: center;
`;

const Input = styled.input`
  margin: 3px 0;
  padding: 5px 10px;
  width: 100%;
  border: 1px solid #ccc;
  border-radius: 5px;
  font-size: 15px;
  height: 30px;
`;

const TextArea = styled.textarea`
  margin: 3px 0;
  padding: 5px 10px;
  width: 100%;
  border: 1px solid #ccc;
  border-radius: 5px;
  font-size: 15px;
  height: 300px;
`;

export default Registration;