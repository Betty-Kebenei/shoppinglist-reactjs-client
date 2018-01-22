
import { LOGIN_SUCCESS, NOT_LOGGEDIN } from '../actions/Login';

export default function(state={}, action) {
  switch(action.type) {
    case LOGIN_SUCCESS:
      return { ...state, authenticated: true };
    case NOT_LOGGEDIN:
      return { ...state, authenticated: false };
    default:
      return state;
  } 
}