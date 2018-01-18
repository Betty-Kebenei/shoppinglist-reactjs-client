import _ from 'lodash';
import { GET_ALLSHOPPINGLISTS_SUCCESS, DELETE_ALLSHOPPINGLISTS_SUCCESS, DELETE_ONESHOPPINGLIST_SUCCESS } from '../actions/Shoppinglist';

export default function(state = {}, action) {
    switch(action.type) {
        case GET_ALLSHOPPINGLISTS_SUCCESS:
            return _.mapKeys(action.payload.data.shoppinglists, 'list_id');
        case DELETE_ALLSHOPPINGLISTS_SUCCESS:
            return action.payload.data
        case DELETE_ONESHOPPINGLIST_SUCCESS:
            return action.payload.data

        default:
            return state;
    }
}