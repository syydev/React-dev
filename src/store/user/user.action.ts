import { makeAsyncActionTypes, makeAsyncActionCreator } from '../../utils/ActionHelper';

export const UserActionTypes = {
  LOGIN: makeAsyncActionTypes('LOGIN'),
  LOGOUT: makeAsyncActionTypes('LOGOUT'),
  SIGN_UP: makeAsyncActionTypes('SIGN_UP'),
  CHECK_DUPLICATE_ID: makeAsyncActionTypes('CHECK_DUPLICATE_ID'),
};

export const UserAction = {
  login: makeAsyncActionCreator(UserActionTypes.LOGIN),
  logout: makeAsyncActionCreator(UserActionTypes.LOGOUT),
  signUp: makeAsyncActionCreator(UserActionTypes.SIGN_UP),
  checkDuplicateId: makeAsyncActionCreator(UserActionTypes.CHECK_DUPLICATE_ID)
};