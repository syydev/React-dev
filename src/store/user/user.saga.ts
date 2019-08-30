import { call, put, takeLatest } from 'redux-saga/effects';
import { SHA256 } from 'crypto-js';
import { UserActionTypes, UserAction } from './user.action';
import { GET, POST } from '../../utils/Api';

export function* login(action: any) {
  try {
    yield put(UserAction.login.request());
    const response = yield call(POST, '/login', { ...action.payload, pw: SHA256(action.payload).toString() });
    if (response.data.isLoggedIn == 'ok') yield put(UserAction.login.success({ id: action.payload.id, name: response.data.name }));
    else alert('아이디 또는 비밀번호를 확인해주세요.');
  } catch (error) {
    yield put(UserAction.login.failure(error));
  }
}

export function* logout() {
  try {
    yield put(UserAction.logout.request());
    yield put(UserAction.logout.success());
  } catch (error) {
    yield put(UserAction.logout.failure());
  }
}

export function* signUp(action: any) {
  try {
    yield put(UserAction.signUp.request());
    const response = yield call(POST, '/users', { ...action.payload, pw: SHA256(action.payload).toString() });
    yield put(UserAction.signUp.success({ id: action.payload.id }));
  } catch (error) {
    yield put(UserAction.signUp.failure(error));
  }
}

export function* checkDuplicateId(action: any) {
  try {
    yield put(UserAction.checkDuplicateId.request());
    const response = yield call(GET, `/users/check/${action.payload}`);
    yield put(UserAction.checkDuplicateId.success({ response }));
    alert('사용가능한 아이디입니다.');
  } catch (error) {
    yield put(UserAction.checkDuplicateId.failure(error));
  }
}

export const UserSagas = [
  takeLatest(UserActionTypes.LOGIN.INDEX, login),
  takeLatest(UserActionTypes.LOGOUT.INDEX, logout),
  takeLatest(UserActionTypes.SIGN_UP.INDEX, signUp),
  takeLatest(UserActionTypes.CHECK_DUPLICATE_ID.INDEX, checkDuplicateId)
];