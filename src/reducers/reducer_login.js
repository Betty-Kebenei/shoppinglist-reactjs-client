import * as types from '../actions/ActionTypes';

export default (state={}, action) => {
  switch(action.type) {
    case types.LOGIN_SUCCESS:
      return { ...state, authenticated: true };
    case types.NOT_LOGGEDIN:
      return { state: undefined, authenticated: false };
    default:
      return state;
  } 
}