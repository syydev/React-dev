export type CounterAction = {
  type: 'reset' | 'decrement' | 'increment'
}

export type LoginAction =
  | { type: 'LOGIN_REQUEST', id: String, pw: String }
  | { type: 'LOGIN_SUCCESS' }
  | { type: 'LOGIN_FAIL' }
  | { type: 'LOGOUT' }
