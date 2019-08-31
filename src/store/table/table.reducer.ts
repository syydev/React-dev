import { TableActionTypes } from './table.action';

export const initialState = {
  totalItems: [],
  items: [],
  itemInfo: {}
};

const tableReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case TableActionTypes.GET_TABLE.SUCCESS:
      return {
        ...state,
        totalItems: action.payload.totalItems
      };
    case TableActionTypes.GET_DATA.SUCCESS:
      return {
        ...state,
        itemInfo: action.payload.itemInfo
      };
    case TableActionTypes.ADD_DATA.SUCCESS:
      console.log(action.payload);
      window.location.href = '/post';
      return {
        ...state,
        itemInfo: action.payload.data
      };
    case TableActionTypes.MODIFY_DATA.SUCCESS:
      return {
        ...state,
        itemInfo: action.payload.itemInfo
      };
    case TableActionTypes.REMOVE_DATA.SUCCESS:
      return state;
    case TableActionTypes.PAGINATION:
      return {
        ...state,
        items: action.payload.items
      };
    default:
      return state;
  }
};

export default tableReducer;