import expect from 'expect';
import shoppingitems from '../../reducers/reducer_shoppingitems';

import { 
    GET_ALLSHOPPINGITEMS_SUCCESS,
    GET_ONESHOPPINGITEM_SUCCESS,
    POST_SHOPPINGITEM_SUCCESS,
    UPDATE_SHOPPINGITEM_SUCCESS,
    DELETE_SHOPPINGITEM_SUCCESS,
    DELETE_ALLSHOPPINGITEMS_SUCCESS,
    PAGINATE_SHOPPINGITEM,
    SEARCH_SHOPPINGITEM
} from '../../actions/ShoppingItems';

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
    it('should delete all shopping items when DELETE_ALLSHOPPINGITEMS_SUCCESS', () => {
        const action = {
            type: DELETE_ALLSHOPPINGITEMS_SUCCESS,
            payload: {
                data: {
                    message: "All shopping items successfully deleted!"
                }
            }
        }
        const expected = {
            data: {
                message: "All shopping items successfully deleted!"
            }
        };
        const newSate = shoppingitems(initialState, action);
        expect(newSate).toEqual(expected);
    });
    it('should delete one shopping item when DELETE_SHOPPINGITEM_SUCCESS', () => {
        const action = {
            type: DELETE_SHOPPINGITEM_SUCCESS,
            payload: {
                data: {
                    message: "shoppingitem with id 1 successfully deleted"
                }
            }
        }
        const expected = {
            data:{
                message: "shoppingitem with id 1 successfully deleted"
            }
        };
        const newSate = shoppingitems(initialState, action);
        expect(newSate).toEqual(expected);

    });
});
