import instance from './AxiosInstance';
import * as types from '../actions/ActionTypes';

import toastr from 'toastr';

const ROOT_URL = 'https://flaskapiv1.herokuapp.com';

export const getAllShoppingitems = (list_id) => {
    return({
       type: types.GET_ALLSHOPPINGITEMS_SUCCESS,
       payload: instance.get(`${ROOT_URL}/shoppinglists/${list_id}/shoppingitems`)
     });
}

export const getOneShoppingitem = (list_id, item_id) => {
 return({
    type: types.GET_ONESHOPPINGITEM_SUCCESS,
    payload: instance.get(`${ROOT_URL}/shoppinglists/${list_id}/shoppingitems/${item_id}`)
  });
}

export const postShoppingitems = (list_id, values) => {
  return async (dispatch) => {
    try {
      console.log(values);
      const request = await instance.post(`${ROOT_URL}/shoppinglists/${list_id}/shoppingitems`, values);

      dispatch({
        type: types.POST_SHOPPINGITEM_SUCCESS,
        payload: request
      })
      window.location.reload();
    } catch(error) {
      console.log(error)
      // toastr.error(error.response.data.message); 
    }
  };
}

export const updateShoppingitems = (list_id, item_id, values, callback) => {
  return async (dispatch) => {
    try {
      const request = await instance.put(`${ROOT_URL}/shoppinglists/${list_id}/shoppingitems/${item_id}`, values);
      
      dispatch({
        type: types.UPDATE_SHOPPINGITEM_SUCCESS,
        payload: request
      })
      callback()
    }catch(error){
      toastr.error(error.response.data.message);
    }
  }; 
}

export const deleteShoppingitem = (list_id, item_id) => {
  return async (dispatch) => {
    try {
      const request = await instance.delete(`${ROOT_URL}/shoppinglists/${list_id}/shoppingitems/${item_id}`)

      dispatch({
        type: types.DELETE_SHOPPINGITEM_SUCCESS,
        payload: request
      })
      window.location.reload();
    }catch(error){
      toastr.error(error.response.data.message);
    }};
 }

export const deleteAllShoppingitems = (list_id) => {
  return({
    type: types.DELETE_ALLSHOPPINGITEMS_SUCCESS,
    payload: instance.delete(`${ROOT_URL}/shoppinglists/${list_id}/shoppingitems`)
  });
 }

export const paginateItems = (list_id, limit, page) => {
  return({
    type: types.PAGINATE_SHOPPINGITEM,
    payload: instance.get(`${ROOT_URL}/shoppinglists/${list_id}/shoppingitems?limit=${limit}&page=${page}`)
  });
}

export const searchShoppingitem = (list_id, term) => {
  return async (dispatch) => {
    try{
      const request = await instance.get(`${ROOT_URL}/shoppinglists/${list_id}/shoppingitems?q=${term}`)

      dispatch({
        type: types.SEARCH_SHOPPINGITEM,
        payload: request
      })
    }catch(error) {
      dispatch({
        type: types.SEARCH_SHOPPINGITEM_ERROR,
        payload: error
      })
    }
  }
}