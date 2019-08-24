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
    <ul className="pagination">
      <li className={pager.currentPage === 1 ? 'disabled' : ''}>
        <button onClick={() => setPager(1)}>First</button>
      </li>
      <li className={pager.currentPage === 1 ? 'disabled' : ''}>
        <button onClick={() => setPager(pager.currentPage - 1)}>Previous</button>
      </li>
      {pager.pages.map((page: number, index: number) =>
        <li key={index} className={pager.currentPage === page ? 'active' : ''}>
          <button onClick={() => setPager(page)}>{page}</button>
        </li>
      )}
      <li className={pager.currentPage === pager.totalPages ? 'disabled' : ''}>
        <button onClick={() => setPager(pager.currentPage + 1)}>Next</button>
      </li>
      <li className={pager.currentPage === pager.totalPages ? 'disabled' : ''}>
        <button onClick={() => setPager(pager.totalPages)}>Last</button>
      </li>
    </ul>
  );
};

export default Pagination;