import expect from 'expect';
import activeShoppinglist from '../../reducers/reducer_activeShoppinglist';
import shoppinglists from '../../reducers/reducer_shoppinglist';

import * as types from "../../actions/ActionTypes";

describe('Active shoppinglist reducer', () => {
    it('should get one shopping list when passed GET_ONESHOPPINGLIST_SUCCESS', () => {
        const initialState = [{}];

        const action = {
            type: types.GET_ONESHOPPINGLIST_SUCCESS,
            payload: {
                data: [{
                    list_id: 1,
                    listname: "shopping list"
                }]
            }
        }
        const expected = {
            "0": {},
            singleShoppingList: {
                data: [{
                    list_id: 1,
                    listname: "shopping list"
                }]
            }
        };
        const newSate = activeShoppinglist(initialState, action);
        expect(newSate).toEqual(expected);

    });
    it('should update one shopping list when passed UPDATE_SHOPPINGLIST_SUCCESS', () => {
        const initialState = [{}];

        const action = {
            type: types.UPDATE_SHOPPINGLIST_SUCCESS,
            payload: {
                data: [{
                    list_id: 1,
                    listname: "list"
                }]
            }
        }
        const expected = {
            "0": {},
            singleShoppingList: {
                data: [{
                    list_id: 1,
                    listname: "list"
                }]
            }
        };
        const newSate = activeShoppinglist(initialState, action);
        expect(newSate).toEqual(expected);
    });
    it('should return empty state when no action type is passed ', () => {
        const initialState = [{}];
        const action = {}
        const expected = [{}]
        const newSate = activeShoppinglist(initialState, action);
        expect(newSate).toEqual(expected);
    });
});