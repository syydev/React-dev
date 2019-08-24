import React from 'react';
import { usePager } from '../../hooks'

type Props = {
  items: {}[],
  pageSize: number
};

const Pagination: React.FC<Props> = props => {
  const { items, pageSize } = props;
  const [pager, setPager] = usePager(items, pageSize);

  if (!pager.pages || pager.pages.length <= 1) {
    return null;
  }

  return (
    <ul>
      <li className={pager.currentPage === 1 ? 'button-disabled' : 'button'}>
        <a onClick={() => setPager(1)}>First</a>
      </li>
      <li className={pager.currentPage === 1 ? 'button-disabled' : 'button'}>
        <a onClick={() => setPager(pager.currentPage - 1)}>Previous</a>
      </li>
      {pager.pages.map((page: number, index: number) =>
        <li key={index} className={pager.currentPage === page ? 'active' : 'button'}>
          <a onClick={() => setPager(page)}>{page}</a>
        </li>
      )}
      <li className={pager.currentPage === pager.totalPages ? 'button-disabled' : 'button'}>
        <a onClick={() => setPager(pager.currentPage + 1)}>Next</a>
      </li>
      <li className={pager.currentPage === pager.totalPages ? 'button-disabled' : 'button'}>
        <a onClick={() => setPager(pager.totalPages)}>Last</a>
      </li>
    </ul>
  );
};

export default Pagination;