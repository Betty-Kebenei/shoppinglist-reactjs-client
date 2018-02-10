import _ from 'lodash';
import { 
    GET_ALLSHOPPINGITEMS_SUCCESS,
    GET_ONESHOPPINGITEM_SUCCESS,
    POST_SHOPPINGITEM_SUCCESS,
    UPDATE_SHOPPINGITEM_SUCCESS,
    DELETE_SHOPPINGITEM_SUCCESS,
    DELETE_ALLSHOPPINGITEMS_SUCCESS,
    PAGINATE_SHOPPINGITEM,
    SEARCH_SHOPPINGITEM,
    SEARCH_SHOPPINGITEM_ERROR
} from '../actions/ShoppingItems';

export default function(state = {
    shoppingitems : {},
}, action) {
    switch(action.type) {
        case GET_ALLSHOPPINGITEMS_SUCCESS:
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
            
        case GET_ONESHOPPINGITEM_SUCCESS:
            return {
                ...state,
                shoppingitem: action.payload.data
            }
        case POST_SHOPPINGITEM_SUCCESS:
            return action.payload
        case UPDATE_SHOPPINGITEM_SUCCESS:
            return {
                ...state,
                shoppingitem: action.payload.data
            }
        case PAGINATE_SHOPPINGITEM:
            return  {
                ...state,
                count: action.payload.data.count,
                shoppingitems: _.mapKeys(action.payload.data.shoppingitems, 'item_id')
            }
        case SEARCH_SHOPPINGITEM:
            return  {
                ...state,
                count: action.payload.data.count,
                shoppingitems: _.mapKeys(action.payload.data.shoppingitems, 'item_id'),
                errorMessage: ''
            }
        case SEARCH_SHOPPINGITEM_ERROR:
            return {
                state: {},
                errorMessage: action.payload.response.data.message
            }
        case DELETE_SHOPPINGITEM_SUCCESS:
            return action.payload
        case DELETE_ALLSHOPPINGITEMS_SUCCESS:
            return action.payload

        default:
            return state;
    }
}