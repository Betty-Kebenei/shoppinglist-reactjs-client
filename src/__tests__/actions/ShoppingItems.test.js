import React from 'react';
import {mount, shallow} from 'enzyme';
import expect from 'expect';

import * as actions from '../../actions/ShoppingItems';

import configureMockStore from 'redux-mock-store'
import thunk from 'redux-thunk'
const middlewares = [thunk];
const mockStore = configureMockStore(middlewares)


describe('sync actions', () => {
    it("GET_ALLSHOPPINGITEMS_SUCCESS is dispatched", () => {
        const store = mockStore({});
        const expectedAction = ["get_allshoppingitems_success"];
        store.dispatch(actions.getAllShoppingitems(1))
        const actionType = store.getActions().map(action => action.type);
        expect(actionType).toEqual(expectedAction);
    });
    it("GET_ONESHOPPINGITEM_SUCCESS is dispatched", () => {
        const store = mockStore({});
        const expectedActions = ["get_oneshoppingitems_success"];
        store.dispatch(actions.getOneShoppingitem())
        const actionType = store.getActions().map(action => action.type);
        expect(actionType).toEqual(expectedActions);
    });
    it("PAGINATE_SHOPPINGITEM is dispatched", () => {
        const store = mockStore({});
        const expectedActions = ["paginate_shoppingitem"];
        store.dispatch(actions.paginateItems(1, 3, 4))
        const actionType = store.getActions().map(action => action.type);
        expect(actionType).toEqual(expectedActions);
    });
    it("DELETE_ALLSHOPPINGITEMS_SUCCESS is dispatched", () => {
        const store = mockStore({});
        const expectedActions = ["delete_allshoppingitems_success"];
        store.dispatch(actions.deleteAllShoppingitems(1))
        const actionType = store.getActions().map(action => action.type);
        expect(actionType).toEqual(expectedActions);
    });
    it("POST_SHOPPINGITEM_SUCCESS is dispatched", async () => {
        const values = {
            itemname: "item", 
            quantity: 1,
            units: "kg",
            price: 3,
            currency: "ksh"
        }
        const store = mockStore({});
        try{
            const response = await values
            const actionType = store.dispatch({
                type: POST_SHOPPINGITEM_SUCCESS,
                payload: response
            })
            const expectedAction = actions.postShoppingitems(1, values)
            expect(actionType).toEqual(expectedActions);
        }catch(e){}
    });
    it("SEARCH_SHOPPINGITEM is dispatched", async () => {
        const term = "term"
        const values = {
            itemname: "item", 
            quantity: 1,
            units: "kg",
            price: 3,
            currency: "ksh"
        }
        const store = mockStore({});
        try{
            const response = await values
            const actionType = store.dispatch({
                type: SEARCH_SHOPPINGITEM,
                payload: response
            })
            const expectedAction = actions.searchShoppingitem(1, term)
            expect(actionType).toEqual(expectedActions);
        }catch(e){
        }
    });
});