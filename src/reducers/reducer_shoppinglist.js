import _ from 'lodash';
import { GET_ALLSHOPPINGLISTS_SUCCESS } from '../actions/Shoppinglist';

export default function(state = {}, action) {
    switch(action.type) {
        case GET_ALLSHOPPINGLISTS_SUCCESS:
            return _.mapKeys(action.payload.data.shoppinglists, 'list_id');

        default:
            return state;
    }
}