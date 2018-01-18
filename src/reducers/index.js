import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';

import LoginReducer from './reducer_login';
import allshoppinglists from './reducer_shoppinglist';
import oneshoppinglist from './reducer_activeShoppinglist';
import shoppingitems from './reducer_shoppingitems';

const rootReducer = combineReducers ({
    form: formReducer,
    user: LoginReducer,
    allshoppinglists,
    oneshoppinglist,
    shoppingitems
    
});

export default rootReducer;

