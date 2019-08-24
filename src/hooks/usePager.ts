import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";

function getPager(totalItems: number, currentPage: number, pageSize: number) {
  const totalPages = Math.ceil(totalItems / pageSize);
  const startIndex = (currentPage - 1) * pageSize;
  const endIndex = Math.min(startIndex + pageSize - 1, totalItems - 1);

  let startPage: number, endPage: number;
  if (totalPages <= 10) {
    startPage = 1;
    endPage = totalPages;
  } else {
    startPage = 1;
    endPage = 10;
  }

  let pages = [];
  for (let i = startPage; i <= endPage; i++) {
    pages.push(i);
  }

  return {
    totalItems: totalItems,
    currentPage: currentPage,
    pageSize: pageSize,
    totalPages: totalPages,
    startPage: startPage,
    endPage: endPage,
    startIndex: startIndex,
    endIndex: endIndex,
    pages: pages
  };
};

export const usePager = (items: {}[], pageSize: number): [any, (page: number) => void] => {
  const [pager, setPager] = useState(getPager(items.length, 1, pageSize));
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch({ type: 'CHANGE_PAGE', items: items.slice(pager.startIndex, pager.endIndex + 1) });
  }, [pager]);

  const updatePager = (page: number) => {
    if (page < 1 || page > pager.totalPages) {
      return;
    }
    setPager(getPager(items.length, page, pageSize));
  };

  return [pager, updatePager];
};