import expect from 'expect';
import rootReducer from '../../reducers/index';
import NOT_LOGGEDIN from '../../actions/Login';

describe('Index reducer', () => {
    it('should return undefined state if NOT_LOGGEDIN action is passed', () => {
        const initialState = {}
        const action = {
            type: NOT_LOGGEDIN
        }
        const expected = {
            state: undefined,
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
            user: {},
        };
        const newSate = rootReducer(initialState, action);
        expect(newSate).toEqual(expected);
    });
});
