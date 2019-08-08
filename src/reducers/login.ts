import { LoginAction } from '../types'

export const initialState = {
  login: false,
  id: '',
  pw: ''
};

export const loginReducer = (state = initialState, action: LoginAction | any) => {
  switch (action.type) {
    case 'LOGIN_REQUEST':
      if (action.id == 'id' && action.pw == 'pw')
        return { login: true, id: action.id, pw: action.pw };
      else
        return state;
    case 'LOGIN_SUCCESS':
      return { ...state, login: true };
    case 'LOGIN_FAIL':
      return initialState;
    case 'LOGOUT':
      return initialState;
    default:
      return state;
  }
};

export default loginReducer;