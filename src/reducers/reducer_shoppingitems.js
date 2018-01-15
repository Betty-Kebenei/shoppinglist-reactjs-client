import _ from 'lodash';
import { GET_ALLSHOPPINGITEMS_SUCCESS } from '../actions/shoppingitems';

export default function(state = {}, action) {
    switch(action.type) {
        case GET_ALLSHOPPINGITEMS_SUCCESS:
            return _.mapKeys(action.payload.data.shoppingitems, 'item_id');

        default:
            return state;
    }
}