import expect from 'expect';
import loginReducer from '../../reducers/reducer_login';

import { LOGIN_SUCCESS, NOT_LOGGEDIN } from '../../actions/Login';

describe('Login reducer', () => {
    it('should authenticate a user when passed LOGIN_SUCCESS', () => {
        const initialState = [{}];

        const action = {
            type: LOGIN_SUCCESS,
        }
        const expected = {
            "0": {},
            authenticated: true
        };

        const newSate = loginReducer(initialState, action);
        expect(newSate).toEqual(expected);

    });

    it('should not authenticate a user when passed NOT_LOGGEDIN', () => {
        const initialState = [{}];

        const action = {
            type: NOT_LOGGEDIN,
        }
        const expected = {
            "0": {},
            authenticated: false
        };

        const newSate = loginReducer(initialState, action);
        expect(newSate).toEqual(expected);

    });
    it('should return empty state when no action type is passed ', () => {
        const initialState = [{}];
        const action = {}
        const expected = [{}]
        const newSate = loginReducer(initialState, action);
        expect(newSate).toEqual(expected);
    });
});
