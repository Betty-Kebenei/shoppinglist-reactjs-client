import expect from 'expect';
import rootReducer from '../../reducers/index';
import * as types from "../../actions/ActionTypes";

describe('Index reducer', () => {
    it('should return undefined state if NOT_LOGGEDIN action is passed', () => {
        const initialState = {}
        const action = {
            type: types.NOT_LOGGEDIN
        }
        const expected = {
            allshoppinglists: {
                next: null,
                previous: null,
                shoppinglists: {}
            },
            form: {},
            oneshoppinglist: {},
            shoppingitems: {
                shoppingitems: {},
            },
            user: {
                authenticated: false,
                state: undefined
            },
        };
        const newSate = rootReducer(initialState, action);
        expect(newSate).toEqual(expected);
    });
});
