import {  GET_ONESHOPPINGLIST_SUCCESS, UPDATE_SHOPPINGLIST_SUCCESS } from '../actions/ShoppingLists';

export default function(state = {}, action) {
    switch(action.type) {
        case GET_ONESHOPPINGLIST_SUCCESS:
            return {
                ...state,
                singleShoppingList: action.payload
            };
        case UPDATE_SHOPPINGLIST_SUCCESS:
            return {
                ...state,
                singleShoppingList: action.payload
            }
        default:
            return state;
    }
}