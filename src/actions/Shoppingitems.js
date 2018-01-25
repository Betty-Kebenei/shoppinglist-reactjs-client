import instance from './AxiosInstance';

import toastr from 'toastr';

const ROOT_URL = 'http://localhost:5000';

export const GET_ALLSHOPPINGITEMS_SUCCESS = 'get_allshoppingitems_success';
export const GET_ONESHOPPINGITEM_SUCCESS = 'get_oneshoppingitems_success';
export const POST_SHOPPINGITEM_SUCCESS = 'post_shoppingitem_success';
export const UPDATE_SHOPPINGITEM_SUCCESS = 'update_shoppingitem_success';
export const DELETE_SHOPPINGITEM_SUCCESS = 'delete_shoppingitem_success';
export const DELETE_ALLSHOPPINGITEMS_SUCCESS = 'delete_allshoppingitems_success';
export const PAGINATE_SHOPPINGITEM = 'paginate_shoppingitem';
export const SEARCH_SHOPPINGITEM = 'search_shoppingitem';

export function getAllShoppingitems(list_id){
    return({
       type: GET_ALLSHOPPINGITEMS_SUCCESS,
       payload: instance.get(`${ROOT_URL}/shoppinglists/${list_id}/shoppingitems`)
     });
}

export function getOneShoppingitem(list_id, item_id){
 return({
    type: GET_ONESHOPPINGITEM_SUCCESS,
    payload: instance.get(`${ROOT_URL}/shoppinglists/${list_id}/shoppingitems/${item_id}`)
  });
}

export function postShoppingitems(list_id, values, callback){
  return async (dispatch) => {
    try {
      const request = await instance.post(`${ROOT_URL}/shoppinglists/${list_id}/shoppingitems`, values);

      dispatch({
        type: POST_SHOPPINGITEM_SUCCESS,
        payload: request
      });
      callback()
    } catch(error) {
      toastr.error(error.response.data.message); 
    }
  };
}

export function updateShoppingitems(list_id, item_id, values){
  return async (dispatch) => {
    try {
      const request = await instance.put(`${ROOT_URL}/shoppinglists/${list_id}/shoppingitems/${item_id}`, values);
      
      dispatch({
        type: UPDATE_SHOPPINGITEM_SUCCESS,
        payload: request
      })
    }catch(error){
      toastr.error(error.response.data.message);
    }
  }; 
}

export function deleteShoppingitem(list_id, item_id){
  return async (dispatch) => {
    try {
      const request = await instance.delete(`${ROOT_URL}/shoppinglists/${list_id}/shoppingitems/${item_id}`)

      dispatch({
        type: DELETE_SHOPPINGITEM_SUCCESS,
        payload: request
      })
      window.location.reload()
    }catch(error){
      toastr.error(error.response.data.message);
    }};
 }

 export function deleteAllShoppingitems(list_id){
  return async (dispatch) => {
    try {
      const request = await instance.delete(`${ROOT_URL}/shoppinglists/${list_id}/shoppingitems`)

      dispatch({
        type: DELETE_ALLSHOPPINGITEMS_SUCCESS,
        payload: request
      })
    }catch(error){
      toastr.error(error.response.data.message);
    }};
 }

 export function paginateItems(list_id, limit, page){
  return({
    type: PAGINATE_SHOPPINGITEM,
    payload: instance.get(`${ROOT_URL}/shoppinglists/${list_id}/shoppingitems?limit=${limit}&page=${page}`)
  });
}

export function searchShoppingitem(list_id, term){
  return async (dispatch) => {
    try{
      const request = await instance.get(`${ROOT_URL}/shoppinglists/${list_id}/shoppingitems?q=${term}`)

      dispatch({
        type: SEARCH_SHOPPINGITEM,
        payload: request
      })
    }catch(error) {
      toastr.error(error.response.data.message);
    }
  }
}