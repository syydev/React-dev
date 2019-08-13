import { LoginAction } from '../types'

export const initialState = {
  isLoggedIn: false,
  id: '',
  pw: ''
};

export const loginReducer = (state = initialState, action: LoginAction | any) => {
  switch (action.type) {
    case 'LOGIN_REQUEST':
      if (action.id === 'id' && action.pw === 'pw') {
        localStorage.setItem('isLoggedIn', 'ok');
        localStorage.setItem('id', action.id);
        window.location.href = './';
        return { isLoggedIn: true, id: action.id, pw: action.pw };
      }
      else
        return state;
    case 'LOGIN_SUCCESS':
      return { ...state, isLoggedIn: true };
    case 'LOGIN_FAIL':
      return initialState;
    case 'LOGOUT':
      localStorage.removeItem('isLoggedIn');
      localStorage.removeItem('id');
      window.location.href = './';
      return initialState;
    default:
      return state;
  }
};

export default loginReducer;