import { combineReducers } from 'redux';

import user from './reducer_login';
import allshoppinglists from './reducer_shoppinglist';
import oneshoppinglist from './reducer_activeShoppinglist';
import shoppingitems from './reducer_shoppingitems';
import form from './FormsReducer';

const rootReducer = combineReducers ({
    form,
    user,
    allshoppinglists,
    oneshoppinglist,
    shoppingitems 
});
export default rootReducer;