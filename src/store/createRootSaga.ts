import { all } from 'redux-saga/effects';
import { UserSagas } from './user/user.saga';
import { TableSagas } from './table/table.saga';

export default function* createRootSaga() {
  yield all([
    ...UserSagas,
    ...TableSagas
  ]);
}