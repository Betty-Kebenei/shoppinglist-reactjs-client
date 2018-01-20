import _ from 'lodash';
import { 
    GET_ALLSHOPPINGLISTS_SUCCESS, 
    DELETE_ALLSHOPPINGLISTS_SUCCESS, 
    DELETE_ONESHOPPINGLIST_SUCCESS,
    UPDATE_SHOPPINGLIST_SUCCESS,
    UPDATE_SHOPPINGLIST_ERROR,
    PAGINATE_SHOPPINGLIST
 } from '../actions/Shoppinglist';

export default function(state = {
    shoppinglists : [],
    next : null,
    previous : null
}, action) {
    switch(action.type) {
        case GET_ALLSHOPPINGLISTS_SUCCESS:
            return{
                ...state,
                shoppinglists: _.mapKeys(action.payload.data.shoppinglists, 'list_id')
            }
        case UPDATE_SHOPPINGLIST_SUCCESS:
            return {
                ...state,
                updateSuccess: action.payload
            }
        case UPDATE_SHOPPINGLIST_ERROR:
            return {
                ...state,
                updateError: action.payload

            }
        case PAGINATE_SHOPPINGLIST:
            return{
                ...state,
                count: action.payload.data.count,
                previous: action.payload.data.prev,
                next: action.payload.data.next,
                shoppinglists: action.payload.data.shoppinglists
            }
        case DELETE_ALLSHOPPINGLISTS_SUCCESS:
            return action.payload.data
        case DELETE_ONESHOPPINGLIST_SUCCESS:
            return action.payload.data

        default:
            return state;
    }
}