import expect from 'expect';
import loginReducer from '../reducers/reducer_login';
import activeShoppinglist from '../reducers/reducer_activeShoppinglist';
import shoppinglists from '../reducers/reducer_shoppinglist';
import shoppingitems from '../reducers/reducer_shoppingitems';

import { LOGIN_SUCCESS, NOT_LOGGEDIN } from '../actions/Login';
import { GET_ONESHOPPINGLIST_SUCCESS, UPDATE_SHOPPINGLIST_SUCCESS } from '../actions/Shoppinglist';
import { 
    GET_ALLSHOPPINGLISTS_SUCCESS,
    DELETE_ALLSHOPPINGLISTS_SUCCESS,
    DELETE_ONESHOPPINGLIST_SUCCESS
} from '../actions/Shoppinglist';

import { 
    GET_ALLSHOPPINGITEMS_SUCCESS,
    GET_ONESHOPPINGITEM_SUCCESS,
    POST_SHOPPINGITEM_SUCCESS,
    UPDATE_SHOPPINGITEM_SUCCESS,
    DELETE_SHOPPINGITEM_SUCCESS,
    DELETE_ALLSHOPPINGITEMS_SUCCESS,
    PAGINATE_SHOPPINGITEM,
    SEARCH_SHOPPINGITEM
} from '../actions/Shoppingitems';

describe('Login reducer', () => {
    it('should authenticate a user when passed LOGIN_SUCCESS', () => {
        const initialState = [{}];

        const action = {
            type: LOGIN_SUCCESS,
        }
        const expected = {
            "0": {},
            authenticated: true
        };

        const newSate = loginReducer(initialState, action);
        expect(newSate).toEqual(expected);

    });

    it('should not authenticate a user when passed NOT_LOGGEDIN', () => {
        const initialState = [{}];

        const action = {
            type: NOT_LOGGEDIN,
        }
        const expected = {
            "0": {},
            authenticated: false
        };

        const newSate = loginReducer(initialState, action);
        expect(newSate).toEqual(expected);

    });
});

describe('Active shoppinglist reducer', () => {
    it('should get one shopping list when passed GET_ONESHOPPINGLIST_SUCCESS', () => {
        const initialState = [{}];

        const action = {
            type: GET_ONESHOPPINGLIST_SUCCESS,
            payload: {
                data: [{
                    list_id: 1,
                    listname: "shopping list"
                }]
            }
        }
        const expected = {
            "0": {},
            singleShoppingList: {
                data: [{
                    list_id: 1,
                    listname: "shopping list"
                }]
            }
        };
        const newSate = activeShoppinglist(initialState, action);
        expect(newSate).toEqual(expected);

    });
    it('should update one shopping list when passed UPDATE_SHOPPINGLIST_SUCCESS', () => {
        const initialState = [{}];

        const action = {
            type: UPDATE_SHOPPINGLIST_SUCCESS,
            payload: {
                data: [{
                    list_id: 1,
                    listname: "list"
                }]
            }
        }
        const expected = {
            "0": {},
            singleShoppingList: {
                data: [{
                    list_id: 1,
                    listname: "list"
                }]
            }
        };
        const newSate = activeShoppinglist(initialState, action);
        expect(newSate).toEqual(expected);

    });
});

describe('Shoppinglists reducer', () => {
    const initialState = [{
        shoppinglists : [],
        next : null,
        previous : null
    }];

    it('should get all shopping lists when passed GET_ALLSHOPPINGLISTS_SUCCESS', () => {
        const action = {
            type: GET_ALLSHOPPINGLISTS_SUCCESS,
            payload: {
                data: {
                    count: 2,
                    next: null,
                    prev: null,
                    shoppinglists: [{
                            list_id: 1,
                            listname: "shopping list 1"
                        },
                        {
                            list_id: 2,
                            listname: "shopping list 2"
        
                        }]
                }
            }
        }

        const expected = {
            "0": {next: null, previous: null, shoppinglists: []},
            count:2,
            previous: null,
            next: null,
            shoppinglists: {
                "1": {list_id: 1, listname: "shopping list 1"},
                "2": {list_id: 2, listname: "shopping list 2"}
            }
           
        };
        const newSate = shoppinglists(initialState, action);
        expect(newSate).toEqual(expected);

    });
    it('should delete shopping lists when DELETE_ALLSHOPPINGLISTS_SUCCESS', () => {
        const action = {
            type: DELETE_ALLSHOPPINGLISTS_SUCCESS,
            payload: {
                data: {
                    message: "All shopping lists successfully deleted"
                }
            }
        }

        const expected = {
            message: "All shopping lists successfully deleted"
        };
        const newSate = shoppinglists(initialState, action);
        expect(newSate).toEqual(expected);

    });

    it('should delete one shopping list when DELETE_ONESHOPPINGLIST_SUCCESS', () => {
        const action = {
            type: DELETE_ONESHOPPINGLIST_SUCCESS,
            payload: {
                data: {
                    message: "Shoppinglist with id 70 successfully deleted"
                }
            }
        }

        const expected = {
            message: "Shoppinglist with id 70 successfully deleted"
        };
        const newSate = shoppinglists(initialState, action);
        expect(newSate).toEqual(expected);

    });
});

describe('Shoppingitems reducer', () => {
    const initialState = [{}];

    it('should get all shopping items when passed GET_ALLSHOPPINGITEMS_SUCCESS', () => {
        const action = {
            type: GET_ALLSHOPPINGITEMS_SUCCESS,
            payload: {
                data: {
                    count: 2,
                    next: null,
                    prev: null,
                    shoppingitems: [{
                            item_id: 1,
                            itemname: "item 1",
                            quantity: 0,
                            price: 0
                        },
                        {
                            item_id: 2,
                            itemname: "item 2",
                            quantity: 0,
                            price: 0
        
                        }]
                }
            }
        }

        const expected = {
            "0": {},
            count:2,
            shoppingitems: {
                "1": {item_id: 1, itemname: "item 1", quantity: 0, price: 0},
                "2": {item_id: 2, itemname: "item 2", quantity: 0, price: 0}
            }
           
        };
        const newSate = shoppingitems(initialState, action);
        expect(newSate).toEqual(expected);

    });
    it('should get one shopping item when passed GET_ALLSHOPPINGITEMS_SUCCESS', () => {
        const action = {
            type: GET_ONESHOPPINGITEM_SUCCESS,
            payload: {
                data: {
                    item_id: 1,
                    itemname: "item 1",
                    quantity: 0,
                    price: 0
                }
            }
        }
        const expected = {
            "0": {},
            shoppingitem: {item_id: 1, itemname: "item 1", quantity: 0, price: 0}
           
        };
        const newSate = shoppingitems(initialState, action);
        expect(newSate).toEqual(expected);

    });
    it('should post a shopping item when passed POST_SHOPPINGITEM_SUCCESS', () => {
        const action = {
            type: POST_SHOPPINGITEM_SUCCESS,
            payload: {
                message: "shoppingitem with itemname melon successfully created."
            }
        }
        const expected = {
                message: "shoppingitem with itemname melon successfully created."
        };
        const newSate = shoppingitems(initialState, action);
        expect(newSate).toEqual(expected);

    });
});
