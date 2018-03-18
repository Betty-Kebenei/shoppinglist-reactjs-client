import expect from 'expect';
import loginReducer from '../../reducers/reducer_login';

import * as types from "../../actions/ActionTypes";

describe('Login reducer', () => {
    it('should authenticate a user when passed LOGIN_SUCCESS', () => {
        const initialState = [{}];

        const action = {
            type: types.LOGIN_SUCCESS,
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
            type: types.NOT_LOGGEDIN,
        }
        const expected = {
            state: undefined,
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
