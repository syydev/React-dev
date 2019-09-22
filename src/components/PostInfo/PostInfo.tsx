import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { TableAction } from '../../store/table/table.action';
import { IState } from '../../type';
import styled from 'styled-components';
import { ButtonRed, LinkButtonRed } from '../../utils/GlobalStyles';

const PostInfo: React.FC = (props: any) => {
  const id = useSelector((state: IState) => state.user.id);
  const item = useSelector((state: IState) => state.table.itemInfo);
  const dispatch = useDispatch();
  console.log(item);

  useEffect(() => {
    dispatch(TableAction.getData.index({ _id: props.match.params.id }));
  }, []);

  return (
    <Container>
      <Table>
        <tbody>
          <Tr>
            <Td>제목</Td>
            <Td>{item.title}</Td>
          </Tr>
          <Tr>
            <Td>날짜</Td>
            <Td>{item.creationDate}</Td>
          </Tr>
          <Tr>
            <Td>작성자</Td>
            <Td>{item.userId}</Td>
          </Tr>
          <Tr>
            <Td>내용</Td>
            <Td><TextArea readOnly>{item.content}</TextArea></Td>
          </Tr>
        </tbody>
      </Table>
      {(item.userId == id) ? (
        <div className='writer-area'>
          <LinkButtonRed to={{ pathname: `/post/${item._id}/${item.title}/modification`, state: item }}>수정</LinkButtonRed>
          <ButtonRed onClick={() => dispatch(TableAction.removeData.index({ _id: item._id }))}>삭제</ButtonRed>
        </div>
      ) : null
      }
    </Container>
  );
};

const Container = styled.div`
  text-align: center;
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

const TextArea = styled.textarea`
  margin: 3px 0;
  padding: 5px 10px;
  width: 100%;
  border: 1px solid #ccc;
  border-radius: 5px;
  font-size: 15px;
  height: 300px;
  resize: none;
`;

export default PostInfo;