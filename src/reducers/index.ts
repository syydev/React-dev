import { combineReducers } from 'redux';
import counterReducer from './counter';
import loginReducer from './login';
import paginationReducer from './pagination';

const rootReducer  = combineReducers({
  counterReducer,
  loginReducer,
  paginationReducer
});

export default rootReducer;