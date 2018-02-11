import { reducer as formReducer } from 'redux-form';
import { POST_SHOPPINGLIST_SUCCESS } from '../actions/ShoppingLists';
import { POST_SHOPPINGITEM_SUCCESS } from '../actions/ShoppingItems';

export default formReducer.plugin({
    AddListForm: (state, action) => {
        switch(action.type){
            case POST_SHOPPINGLIST_SUCCESS:
                return undefined;
            default:
                return state;
        }
    },
    AddItemForm:(state, action) => {
        switch(action.type){
            case POST_SHOPPINGITEM_SUCCESS:
                return undefined;
            default:
                return state;
        }
    }
})