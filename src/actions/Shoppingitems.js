import instance from './AxiosInstance';
const ROOT_URL = 'http://localhost:5000';

export const GET_ALLSHOPPINGITEMS_SUCCESS = 'get_allshoppingitems_success';
export const GET_ONESHOPPINGITEMS_SUCCESS = 'get_oneshoppingitems_success';
export const POST_SHOPPINGITEM_SUCCESS = 'post_shoppingitem_success';
export const POST_SHOPPINGITEM_ERROR = 'post_shoppingitem_error'

export function getAllShoppingitems(list_id){
    return({
       type: GET_ALLSHOPPINGITEMS_SUCCESS,
       payload: instance.get(`${ROOT_URL}/shoppinglists/${list_id}/shoppingitems`)
     });
}

export function getOneShoppingitem(list_id, item_id){
 return({
    type: GET_ONESHOPPINGITEMS_SUCCESS,
    payload: instance.get(`${ROOT_URL}/shoppinglists/${list_id}/shoppingitems/${item_id}`)
  });
}

export function postShoppingitems(list_id, values, callback){
  return async (dispatch) => {
    try {
      const request = await instance.post(`${ROOT_URL}/shoppinglists/${list_id}/shoppingitems`, values);

      dispatch({type: POST_SHOPPINGITEM_SUCCESS})
      callback()
    }catch(error){
      dispatch({
        type: POST_SHOPPINGITEM_ERROR,
        // payload: 'Shoppping list name already exists.'
      });
    }
  }; 
}