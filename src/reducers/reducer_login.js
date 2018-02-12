
import { LOGIN_SUCCESS, NOT_LOGGEDIN } from '../actions/Login';

export default (state={}, action) => {
  switch(action.type) {
    case LOGIN_SUCCESS:
      return { ...state, authenticated: true };
    case NOT_LOGGEDIN:
      return { state: undefined, authenticated: false };
    default:
      return state;
  } 
}