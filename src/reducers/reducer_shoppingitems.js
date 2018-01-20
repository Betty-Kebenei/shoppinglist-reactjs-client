import _ from 'lodash';
import { GET_ALLSHOPPINGITEMS_SUCCESS, POST_SHOPPINGITEM_SUCCESS, POST_SHOPPINGITEM_ERROR } from '../actions/Shoppingitems';

export default function(state = {}, action) {
    switch(action.type) {
        case GET_ALLSHOPPINGITEMS_SUCCESS:
            return _.mapKeys(action.payload.data.shoppingitems, 'item_id');
        case POST_SHOPPINGITEM_SUCCESS:
            return action.payload
        case POST_SHOPPINGITEM_ERROR:
            return { error: action.payload };

        default:
            return state;
    }
}