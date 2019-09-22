import React from 'react';
import { usePager } from '../../hooks'
import { IItem } from '../../type';
import styled from 'styled-components';

interface IProps {
  totalItems: Array<IItem>,
  pageSize: number,
};

interface IButton {
  state: string,
}

const Pagination: React.FC<IProps> = props => {
  const { totalItems, pageSize } = props;
  const [pager, setPager] = usePager(totalItems, pageSize);

  if (!pager.pages || pager.pages.length <= 1) {
    return null;
  }

  return (
    <ul>
      <Button state={pager.currentPage === 1 ? 'button-disabled' : 'button'}>
        <a onClick={() => setPager(1)}>First</a>
      </Button>
      <Button state={pager.currentPage === 1 ? 'button-disabled' : 'button'}>
        <a onClick={() => setPager(pager.currentPage - 1)}>Previous</a>
      </Button>
      {pager.pages.map((page: number, index: number) =>
        <Button key={index} state={pager.currentPage === page ? 'active' : 'button'}>
          <a onClick={() => setPager(page)}>{page}</a>
        </Button>
      )}
      <Button state={pager.currentPage === pager.totalPages ? 'button-disabled' : 'button'}>
        <a onClick={() => setPager(pager.currentPage + 1)}>Next</a>
      </Button>
      <Button state={pager.currentPage === pager.totalPages ? 'button-disabled' : 'button'}>
        <a onClick={() => setPager(pager.totalPages)}>Last</a>
      </Button>
    </ul>
  );
};

const Li = styled.li`
  display: inline-block;
  font-weight: bold;
  margin: 0 3px 0 3px;
`;

const Button = styled(Li)`
  color: ${(props: IButton) => {
    if (props.state === 'active') return 'black'
    return 'gray'
  }};
  visibility: ${(props: IButton) => {
    if (props.state === 'button-disabled') return 'hidden'
    return 'none'
  }};
  cursor: pointer;
  &:hover {
    color: black;
  }
`;

export default Pagination;