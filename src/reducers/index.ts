import { combineReducers } from 'redux';
import counterReducer from './counter';
import loginReducer from './login';

const rootReducer  = combineReducers({
  counterReducer,
  loginReducer
});

export default rootReducer;