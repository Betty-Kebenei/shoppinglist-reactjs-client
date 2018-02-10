import _ from 'lodash';
import { 
    GET_ALLSHOPPINGLISTS_SUCCESS, 
    DELETE_ALLSHOPPINGLISTS_SUCCESS, 
    DELETE_ONESHOPPINGLIST_SUCCESS,
    PAGINATE_SHOPPINGLIST,
    SEARCH_SHOPPINGLIST,
    SEARCH_SHOPPINGLIST_ERROR
 } from '../actions/ShoppingLists';

export default function(state = {
    shoppinglists : {},
    next : null,
    previous : null
}, action) {
    switch(action.type) {
        case GET_ALLSHOPPINGLISTS_SUCCESS:
            return{
                ...state,
                count: action.payload.data.count,
                shoppinglists: _.mapKeys(action.payload.data.shoppinglists, 'list_id')
            }
        case PAGINATE_SHOPPINGLIST:
            return{
                ...state,
                count: action.payload.data.count,
                shoppinglists: _.mapKeys(action.payload.data.shoppinglists, 'list_id')
            }
        case SEARCH_SHOPPINGLIST:
            return{
                ...state,
                count: action.payload.data.count,
                shoppinglists:  _.mapKeys(action.payload.data.shoppinglists, 'list_id'),
                errorMessage: ''
            }
        case SEARCH_SHOPPINGLIST_ERROR:
            return {
                state: {},
                errorMessage: action.payload.response.data.message
            } 
        case DELETE_ALLSHOPPINGLISTS_SUCCESS:
            return action.payload.data
        case DELETE_ONESHOPPINGLIST_SUCCESS:
            return action.payload.data

        default:
            return state;
    }
}