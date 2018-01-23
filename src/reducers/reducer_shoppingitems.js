import _ from 'lodash';
import { 
    GET_ALLSHOPPINGITEMS_SUCCESS,
    GET_ONESHOPPINGITEM_SUCCESS,
    POST_SHOPPINGITEM_SUCCESS,
    UPDATE_SHOPPINGITEM_SUCCESS,
    DELETE_SHOPPINGITEM_SUCCESS,
    DELETE_ALLSHOPPINGITEMS_SUCCESS
} from '../actions/Shoppingitems';

export default function(state = {}, action) {
    switch(action.type) {
        case GET_ALLSHOPPINGITEMS_SUCCESS:
            return {
                ...state,
                shoppingitems: _.mapKeys(action.payload.data.shoppingitems, 'item_id')
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
                updateSuccess: action.payload.data
            }
        case DELETE_SHOPPINGITEM_SUCCESS:
            return action.payload
        case DELETE_ALLSHOPPINGITEMS_SUCCESS:
            return action.payload

        default:
            return state;
    }
}