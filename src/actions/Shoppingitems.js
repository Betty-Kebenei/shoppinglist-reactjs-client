import instance from './AxiosInstance';
const ROOT_URL = 'http://localhost:5000';

export const GET_ALLSHOPPINGITEMS_SUCCESS = 'get_allshoppingitems_success';
export const GET_ONESHOPPINGITEMS_SUCCESS = 'get_oneshoppingitems_success';

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