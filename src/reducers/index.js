import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import { NOT_LOGGEDIN } from '../actions/Login'
import { POST_SHOPPINGLIST_SUCCESS } from '../actions/ShoppingLists';

import LoginReducer from './reducer_login';
import allshoppinglists from './reducer_shoppinglist';
import oneshoppinglist from './reducer_activeShoppinglist';
import shoppingitems from './reducer_shoppingitems';

const appReducer = combineReducers ({
    form: formReducer.plugin({
        ShoppinglistForm: (state, action) => {
            switch(action.type){
                case POST_SHOPPINGLIST_SUCCESS:
                    return undefined;
                default:
                    return state;
            }
        }
    }),
    user: LoginReducer,
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

