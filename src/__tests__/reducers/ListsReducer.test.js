import expect from 'expect';
import shoppinglists from '../../reducers/reducer_shoppinglist';

import { 
    GET_ALLSHOPPINGLISTS_SUCCESS,
    DELETE_ALLSHOPPINGLISTS_SUCCESS,
    DELETE_ONESHOPPINGLIST_SUCCESS,
    PAGINATE_SHOPPINGLIST,
    SEARCH_SHOPPINGLIST,
    SEARCH_SHOPPINGLIST_ERROR
 } from '../../actions/ShoppingLists';

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
    it('should return initialState state when no action type is passed ', () => {
        const action = {}
        const expected = [{
            shoppinglists : [],
            next : null,
            previous : null
        }]
        const newSate = shoppinglists(initialState, action);
        expect(newSate).toEqual(expected);
    });
    it('should paginate lists with action PAGINATE_SHOPPINGLIST ', () => {
        const action = {
            type: PAGINATE_SHOPPINGLIST,
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
            shoppinglists: {
                "1": {list_id: 1, listname: "shopping list 1"},
                "2": {list_id: 2, listname: "shopping list 2"}
            }
           
        };
        const newSate = shoppinglists(initialState, action);
        expect(newSate).toEqual(expected);
    });
    it('should search lists with action SEARCH_SHOPPINGLIST ', () => {
        const action = {
            type: SEARCH_SHOPPINGLIST,
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
            shoppinglists: {
                "1": {list_id: 1, listname: "shopping list 1"},
                "2": {list_id: 2, listname: "shopping list 2"}
            },
            errorMessage: ''
           
        };
        const newSate = shoppinglists(initialState, action);
        expect(newSate).toEqual(expected);
    });
    it('should return error with action SEARCH_SHOPPINGLIST_ERROR ', () => {
        const action = {
            type: SEARCH_SHOPPINGLIST_ERROR,
            payload: {
                response: {
                    data: {
                        message: "No shoppinglist to display"
                        }
                    }
            }
        }
        const expected = {
            state: {},
            errorMessage: "No shoppinglist to display"
            };

        const newSate = shoppinglists(initialState, action);
        expect(newSate).toEqual(expected);
    });
});