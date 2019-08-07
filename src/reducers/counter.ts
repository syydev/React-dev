import { CounterAction } from '../types'

const initialState = { count: 0 };

export const counterReducer = (state = initialState, action: CounterAction) => {
  switch (action.type) {
    case 'reset':
      return { ...state, count: initialState.count };
    case 'increment':
      return { ...state, count: state.count + 1 };
    case 'decrement':
      return { ...state, count: state.count - 1 };
    default:
      return state;
  }
};

export default counterReducer;