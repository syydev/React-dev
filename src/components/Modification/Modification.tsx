import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { TableAction } from '../../store/table/table.action';
import styled from 'styled-components';
import { ButtonRed } from '../../utils/GlobalStyles';

const Modification: React.FC = (props: any) => {
  const [title, setTitle] = useState(props.location.state.title);
  const [content, setContent] = useState(props.location.state.content);
  const { _id, userId } = props.location.state;
  const dispatch = useDispatch();

  return (
    <Container className='modification'>
      <TableTitle>수정하기</TableTitle>
      <form onSubmit={(event) => { event.preventDefault(); dispatch(TableAction.modifyData.index({ _id: _id, title: title, content: content, userId: userId })) }}>
        <Table>
          <tbody>
            <Tr>
              <Td><Input type="text" placeholder="제목" value={title} onChange={event => setTitle(event.target.value)} required /></Td>
            </Tr>
            <Tr>
              <Td><TextArea placeholder="내용을 작성하세요" value={content} onChange={event => setContent(event.target.value)} required></TextArea></Td>
            </Tr>
          </tbody>
        </Table>
        <ButtonRed type='submit'>수정</ButtonRed>
        <ButtonRed type='button' onClick={() => props.history.goBack()}>취소</ButtonRed>
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

export default Modification;