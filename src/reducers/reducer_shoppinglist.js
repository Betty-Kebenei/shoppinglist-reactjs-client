import _ from 'lodash';
import * as types from '../actions/ActionTypes';

export default (state = {
    shoppinglists : {},
    next : null,
    previous : null
}, action) => {
    switch(action.type) {
        case types.GET_ALLSHOPPINGLISTS_SUCCESS:
            return{
                ...state,
                count: action.payload.data.count,
                shoppinglists: _.mapKeys(action.payload.data.shoppinglists, 'list_id')
            }
        case types.PAGINATE_SHOPPINGLIST:
            return{
                ...state,
                count: action.payload.data.count,
                shoppinglists: _.mapKeys(action.payload.data.shoppinglists, 'list_id')
            }
        case types.SEARCH_SHOPPINGLIST:
            return{
                ...state,
                count: action.payload.data.count,
                shoppinglists:  _.mapKeys(action.payload.data.shoppinglists, 'list_id'),
                errorMessage: ''
            }
        case types.SEARCH_SHOPPINGLIST_ERROR:
            return {
                state: {},
                errorMessage: action.payload.response.data.message
            } 
        case types.DELETE_ALLSHOPPINGLISTS_SUCCESS:
            return action.payload.data
        case types.DELETE_ONESHOPPINGLIST_SUCCESS:
            return action.payload.data

        default:
            return state;
    }
}