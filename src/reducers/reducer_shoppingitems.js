import _ from 'lodash';
import * as types from '../actions/ActionTypes';

export default (state = {
    shoppingitems : {},
}, action) => {
    switch(action.type) {
        case types.GET_ALLSHOPPINGITEMS_SUCCESS:
        if(action.payload.data){
            return {
                ...state,
                count:action.payload.data.count,
                shoppingitems: _.mapKeys(action.payload.data.shoppingitems, 'item_id')
         } 
        }else{
            return {
                ...state,
                count:0,
                shoppingitems: {}
         } 
        }
            
        case types.GET_ONESHOPPINGITEM_SUCCESS:
            return {
                ...state,
                shoppingitem: action.payload.data
            }
        case types.POST_SHOPPINGITEM_SUCCESS:
            return action.payload
        case types.UPDATE_SHOPPINGITEM_SUCCESS:
            return {
                ...state,
                shoppingitem: action.payload.data
            }
        case types.PAGINATE_SHOPPINGITEM:
            return  {
                ...state,
                count: action.payload.data.count,
                shoppingitems: _.mapKeys(action.payload.data.shoppingitems, 'item_id')
            }
        case types.SEARCH_SHOPPINGITEM:
            return  {
                ...state,
                count: action.payload.data.count,
                shoppingitems: _.mapKeys(action.payload.data.shoppingitems, 'item_id'),
                errorMessage: ''
            }
        case types.SEARCH_SHOPPINGITEM_ERROR:
            return {
                state: {},
                errorMessage: action.payload.response.data.message
            }
        case types.DELETE_SHOPPINGITEM_SUCCESS:
            return action.payload
        case types.DELETE_ALLSHOPPINGITEMS_SUCCESS:
            return action.payload

        default:
            return state;
    }
}