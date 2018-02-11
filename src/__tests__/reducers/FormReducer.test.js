import expect from 'expect';
import form from '../../reducers/FormsReducer';

import { POST_SHOPPINGLIST_SUCCESS } from '../../actions/ShoppingLists';
import { POST_SHOPPINGITEM_SUCCESS } from '../../actions/ShoppingItems';

describe('form reducer', () => {
    it('should clear AddListForm', () => {
        const initialState = {};

        const action = {
            type: POST_SHOPPINGLIST_SUCCESS,
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
            type: POST_SHOPPINGITEM_SUCCESS,
        }
        const expected = {
            state: undefined
        };

        const newSate = form(initialState, action);
        expect(newSate).toEqual(expected);

    });
    // it('should return empty state when no action type is passed ', () => {
    //     const initialState = [{}];
    //     const action = {}
    //     const expected = [{}]
    //     const newSate = loginReducer(initialState, action);
    //     expect(newSate).toEqual(expected);
    // });
});
