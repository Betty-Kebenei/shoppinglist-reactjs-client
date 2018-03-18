import expect from 'expect';
import form from '../../reducers/FormsReducer';
import * as types from "../../actions/ActionTypes";

describe('form reducer', () => {
    it('should clear AddListForm', () => {
        const initialState = {};

        const action = {
            type: types.POST_SHOPPINGLIST_SUCCESS,
        }
        const expected = {
            state: undefined
        };

        const newSate = form(initialState, action);
        expect(newSate).toEqual(expected);

    });

    it('should clear AddItemForm', () => {
        const initialState = {};

        const action = {
            type: types.POST_SHOPPINGITEM_SUCCESS,
        }
        const expected = {
            state: undefined
        };

        const newSate = form(initialState, action);
        expect(newSate).toEqual(expected);
    });
});
