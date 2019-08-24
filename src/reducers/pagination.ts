import { PaginationAction } from '../types'

export const initialState = {
  items: []
};

export const paginationReducer = (state = initialState, action: PaginationAction | any) => {
  switch (action.type) {
    case 'CHANGE_PAGE':
      return { ...state, items: action.items };
    default:
      return state;
  }
};

export default paginationReducer;