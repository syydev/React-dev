import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { UserAction } from '../../store/user/user.action';
import styled from 'styled-components';
import { ButtonRed } from '../../utils/GlobalStyles';

const SignUp: React.FC = () => {
  const [id, setId] = useState('');
  const [pw, setPw] = useState('');
  const [name, setName] = useState('');
  const dispatch = useDispatch();

  return (
    <Container>
      <TableTitle>회원가입</TableTitle>
      <form onSubmit={(event) => { event.preventDefault(); dispatch(UserAction.signUp.index({ id: id, pw: pw, name: name })) }}>
        <Table>
          <tbody>
            <Tr>
              <Td><Input type="text" placeholder="ID" onChange={event => setId(event.target.value)} required /></Td>
            </Tr>
            <Tr>
              <Td><Input type="password" placeholder="Password" onChange={event => setPw(event.target.value)} required /></Td>
            </Tr>
            <Tr>
              <Td><Input type="text" placeholder="Name" onChange={event => setName(event.target.value)} required /></Td>
            </Tr>
          </tbody>
        </Table>
        <ButtonRed type='submit'>회원가입</ButtonRed>
      </form>
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
  padding: 8px 10px 8px 10px;
  text-align: center;
  background: white;
  border-collapse: collapse;
  margin: 15px auto;
  width: 20%;
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

export default SignUp;