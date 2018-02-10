import React from 'react';
import {mount, shallow} from 'enzyme';
import expect from 'expect';

import { 
    GET_ALLSHOPPINGLISTS_SUCCESS, 
    DELETE_ALLSHOPPINGLISTS_SUCCESS, 
    DELETE_ONESHOPPINGLIST_SUCCESS,
    PAGINATE_SHOPPINGLIST,
    SEARCH_SHOPPINGLIST
 } from '../../actions/ShoppingLists';
import * as actions from '../../actions/ShoppingLists';

import configureMockStore from 'redux-mock-store'
import thunk from 'redux-thunk'
const middlewares = [thunk];
const mockStore = configureMockStore(middlewares)


describe('sync actions', () => {
    it("GET_ONESHOPPINGLIST_SUCCESS is dispatched", () => {
        const store = mockStore({});
        const expectedAction = ["get_oneshoppinglist_success"];
        store.dispatch(actions.getOneShoppinglist(1))
        const actionType = store.getActions().map(action => action.type);
        expect(actionType).toEqual(expectedAction);
    });
    it("DELETE_ALLSHOPPINGLISTS_SUCCESS is dispatched", () => {
        const store = mockStore({});
        const expectedActions = ["delete_allshoppinglists_success"];
        store.dispatch(actions.deleteShoppinglists())
        const actionType = store.getActions().map(action => action.type);
        expect(actionType).toEqual(expectedActions);
    });
    it("PAGINATE_SHOPPINGLIST is dispatched", () => {
        const store = mockStore({});
        const expectedActions = ["paginate_shoppinglist"];
        store.dispatch(actions.paginateLists(5, 2))
        const actionType = store.getActions().map(action => action.type);
        expect(actionType).toEqual(expectedActions);
    });
});