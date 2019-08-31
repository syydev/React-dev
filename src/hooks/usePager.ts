import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { TableAction } from '../store/table/table.action';

function getPager(totalItemsNum: number, currentPage: number, pageSize: number) {
  const totalPages = Math.ceil(totalItemsNum / pageSize);
  const startIndex = (currentPage - 1) * pageSize;
  const endIndex = Math.min(startIndex + pageSize, totalItemsNum);

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
    totalItemsNum: totalItemsNum,
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

export const usePager = (totalItems: [], pageSize: number): [any, (page: number) => void] => {
  const [pager, setPager] = useState(getPager(totalItems.length, 1, pageSize));
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(TableAction.getTable.index());
  }, []);

  useEffect(() => {
    setPager(getPager(totalItems.length, pager.currentPage, pageSize))
  }, [totalItems]);

  useEffect(() => {
    dispatch(TableAction.pagination({ items: totalItems.slice(pager.startIndex, pager.endIndex) }));
  }, [pager]);

  const updatePager = (page: number) => {
    if (page < 1 || page > pager.totalPages) {
      return;
    }
    setPager(getPager(totalItems.length, page, pageSize));
  };

  return [pager, updatePager];
};