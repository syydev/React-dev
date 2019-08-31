import { UserActionTypes } from './user.action';

export const initialState = {
  isLoggedIn: false,
  isCheckDuplicate: false,
  id: '',
  name: ''
};

const userReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case UserActionTypes.LOGIN.SUCCESS:
      window.localStorage.setItem('isLoggedIn', 'ok');
      window.localStorage.setItem('id', action.payload.id);
      window.localStorage.setItem('name', action.payload.name);
      action.payload.push('/');
      return {
        ...state,
        isLoggedIn: true,
        id: action.payload.id
      };
    case UserActionTypes.LOGOUT.SUCCESS:
      window.localStorage.clear();
      window.location.href = '/';
      return initialState;
    case UserActionTypes.SIGN_UP.SUCCESS:
      action.payload.push('/');
      alert('회원가입이 완료되었습니다.');
      return {
        ...state,
        isLoggedIn: true,
        id: action.payload.id
      };
    case UserActionTypes.CHECK_DUPLICATE_ID.SUCCESS:
      return {
        ...state,
        isCheckDuplicate: true
      };
    default:
      return state;
  }
};

export default userReducer;