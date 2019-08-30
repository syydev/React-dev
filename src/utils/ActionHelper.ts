const INDEX = 'INDEX';
const REQUEST = 'REQUEST';
const SUCCESS = 'SUCCESS';
const FAILURE = 'FAILURE';

interface IAsyncActionTypes { BASE: string, INDEX: string, REQUEST: string, SUCCESS: string, FAILURE: string };

export function makeAsyncActionTypes(base: string) {
  const asyncActionTypes: IAsyncActionTypes = [INDEX, REQUEST, SUCCESS, FAILURE].reduce(
    (acc: any, type: string) => {
      acc[type] = `${base}_${type}`;
      return acc;
    },
    {},
  );

  asyncActionTypes.BASE = base;
  return asyncActionTypes;
}

export function makeActionCreator(actionType: string) {
  return (payload?: any) => ({ type: actionType, payload });
}

export function makeAsyncActionCreator(action: IAsyncActionTypes) {
  const actionCreator = {
    index: makeActionCreator(action.INDEX),
    request: makeActionCreator(action.REQUEST),
    success: makeActionCreator(action.SUCCESS),
    failure: makeActionCreator(action.FAILURE)
  };
  return actionCreator;
}