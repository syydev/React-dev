import { call, put, takeLatest } from 'redux-saga/effects';
import { TableAction, TableActionTypes } from './table.action';
import { GET, POST } from '../../utils/Api';

export function* getTable() {
  try {
    yield put(TableAction.getTable.request());
    const response = yield call(GET, '/items');
    yield put(TableAction.getTable.success({ totalItems: response.data }));
  } catch (error) {
    yield put(TableAction.getTable.failure(error));
  }
}

export function* getData(action: any) {
  try {
    yield put(TableAction.getData.request());
    const response = yield call(GET, `items/${action.payload._id}`);
    yield put(TableAction.getData.success({ ...response }));
  } catch (error) {
    yield put(TableAction.getData.failure(error));
  }
}

export function* addData(action: any) {
  try {
    yield put(TableAction.addData.request());
    const response = yield call(POST, '/items', action.payload);
    yield put(TableAction.addData.success(response));
  } catch (error) {
    yield put(TableAction.addData.failure(error));
  }
}

export const TableSagas = [
  takeLatest(TableActionTypes.GET_TABLE.INDEX, getTable),
  takeLatest(TableActionTypes.GET_DATA.INDEX, getData),
  takeLatest(TableActionTypes.ADD_DATA.INDEX, addData)
];