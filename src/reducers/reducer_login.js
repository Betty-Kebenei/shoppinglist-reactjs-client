
import { LOGIN_SUCCESS, LOGIN_ERROR, NOT_LOGGEDIN } from '../actions/Login';

export default function(state={}, action) {
  switch(action.type) {
    case LOGIN_SUCCESS:
      return { ...state, authenticated: true };
    case NOT_LOGGEDIN:
      return { ...state, authenticated: false };
    case LOGIN_ERROR:
      return { ...state, error: action.payload };
    default:
      return state;
  } 
}