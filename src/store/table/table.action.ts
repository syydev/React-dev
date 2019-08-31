import { makeActionCreator, makeAsyncActionTypes, makeAsyncActionCreator } from '../../utils/ActionHelper';

export const TableActionTypes = {
  GET_TABLE: makeAsyncActionTypes('GET_TABLE'),
  GET_DATA: makeAsyncActionTypes('GET_DATA'),
  ADD_DATA: makeAsyncActionTypes('ADD_DATA'),
  MODIFY_DATA: makeAsyncActionTypes('MODIFY_DATA'),
  REMOVE_DATA: makeAsyncActionTypes('REMOVE_DATA'),
  PAGINATION: 'PAGINATION'
};

export const TableAction = {
  getTable: makeAsyncActionCreator(TableActionTypes.GET_TABLE),
  getData: makeAsyncActionCreator(TableActionTypes.GET_DATA),
  addData: makeAsyncActionCreator(TableActionTypes.ADD_DATA),
  modifyData: makeAsyncActionCreator(TableActionTypes.MODIFY_DATA),
  removeData: makeAsyncActionCreator(TableActionTypes.REMOVE_DATA),
  pagination: makeActionCreator(TableActionTypes.PAGINATION)
};