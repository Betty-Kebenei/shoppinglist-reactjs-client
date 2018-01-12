
import { LOGIN_USER, LOGIN_SUCCESS, LOGIN_ERROR  } from '../actions/Login';

export default function(state={}, action) {
  switch(action.type) {
    case LOGIN_SUCCESS:
      return { ...state, authenticated: true };
    case LOGIN_USER:
      return { ...state, authenticated: false };
    case LOGIN_ERROR:
      return { ...state, error: action.payload };
  }
  return state;
}