import { call, put, takeLatest } from 'redux-saga/effects';
import { TableAction, TableActionTypes } from './table.action';
import { GET, POST, PUT, DELETE } from '../../utils/Api';

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
    const response = yield call(GET, `/items/${action.payload._id}`);
    yield put(TableAction.getData.success({ itemInfo: response.data }));
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

export function* modifyData(action: any) {
  try {
    yield put(TableAction.addData.request());
    const response = yield call(PUT, `/items/${action.payload._id}`, action.payload);
    yield put(TableAction.addData.success({ itemInfo: response.data }));
  } catch (error) {
    yield put(TableAction.addData.failure(error));
  }
}

export function* removeData(action: any) {
  try {
    yield put(TableAction.addData.request());
    const response = yield call(DELETE, `/items/${action.payload._id}`);
    yield put(TableAction.addData.success());
  } catch (error) {
    yield put(TableAction.addData.failure(error));
  }
}

export const TableSagas = [
  takeLatest(TableActionTypes.GET_TABLE.INDEX, getTable),
  takeLatest(TableActionTypes.GET_DATA.INDEX, getData),
  takeLatest(TableActionTypes.ADD_DATA.INDEX, addData),
  takeLatest(TableActionTypes.MODIFY_DATA.INDEX, modifyData),
  takeLatest(TableActionTypes.REMOVE_DATA.INDEX, removeData)
];