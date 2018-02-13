import { combineReducers } from 'redux';

import user from './reducer_login';
import allshoppinglists from './reducer_shoppinglist';
import oneshoppinglist from './reducer_activeShoppinglist';
import shoppingitems from './reducer_shoppingitems';
import form from './FormsReducer';

import { NOT_LOGGEDIN } from '../actions/Login';

const appReducer = combineReducers ({
    form,
    user,
    allshoppinglists,
    oneshoppinglist,
    shoppingitems
    
});

const rootReducer = (state, action) => {
    if(action.type === NOT_LOGGEDIN ){
        state = undefined
    }
    return appReducer(state, action);
}

export default rootReducer;
