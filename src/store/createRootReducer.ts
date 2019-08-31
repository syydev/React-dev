import { combineReducers } from 'redux';
import userReducer from './user/user.reducer';
import tableReducer from './table/table.reducer';

const createRootReducer = () =>
  combineReducers({
    user: userReducer,
    table: tableReducer
  });

export default createRootReducer;