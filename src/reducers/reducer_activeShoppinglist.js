import {  GET_ONESHOPPINGLIST_SUCCESS } from '../actions/Shoppinglist';

export default function(state = null, action) {
    switch(action.type) {
        case GET_ONESHOPPINGLIST_SUCCESS:
            return action.payload;

        default:
            return state;
    }
}