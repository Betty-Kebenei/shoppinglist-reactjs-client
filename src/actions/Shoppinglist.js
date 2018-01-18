import instance from './AxiosInstance';
import  {logout}  from './Login';

const ROOT_URL = 'http://localhost:5000';

export const POST_SHOPPINGLIST_SUCCESS = 'post_shoppinglist_success';
export const POST_SHOPPINGLIST_ERROR = 'post_shoppinglist_success';
export const GET_ALLSHOPPINGLISTS_SUCCESS = 'get_allshoppinglists_success';
export const GET_ALLSHOPPINGLISTS_ERROR = 'get_allshoppinglists_error';
export const GET_ONESHOPPINGLIST_SUCCESS = 'get_oneshoppinglist_success';
export const GET_ONESHOPPINGLIST_ERROR = 'get_oneshoppinglist_eeror';
export const DELETE_ALLSHOPPINGLISTS_SUCCESS = 'delete_allshoppinglists_success';
export const DELETE_ONESHOPPINGLIST_SUCCESS = 'delete_oneshoppinglist_success';
export const DELETE_ONESHOPPINGLIST_ERROR = 'delete_oneshoppinglist_error';

export function postShoppinglist(values, callback){
  return async (dispatch) => {
    try {
      const request = await instance.post(`${ROOT_URL}/shoppinglists`, values);

      dispatch({type: POST_SHOPPINGLIST_SUCCESS})
      callback()
    }catch(error){
      dispatch({
        type: POST_SHOPPINGLIST_ERROR,
        payload: 'Shoppping list name already exists.'
      });
    }
  }; 
}

export function getAllShoppinglists(){
  return async (dispatch) => {
    try{
      const request = await instance.get(`${ROOT_URL}/shoppinglists`);

      dispatch({
        type: GET_ALLSHOPPINGLISTS_SUCCESS,
        payload: request
      })
    }catch(error) {
      dispatch({type: GET_ALLSHOPPINGLISTS_ERROR
      });
      if(error.response.data.message === 'Sorry your token expired, please log in again!'){
        dispatch(logout())
      }
    }
  }
}

export function getOneShoppinglist(id){
  return async (dispatch) => {
    try{
      const request = await instance.get(`${ROOT_URL}/shoppinglists/${id}`)

      dispatch({
        type: GET_ONESHOPPINGLIST_SUCCESS,
        payload: request
      })
    }catch(error) {
      dispatch({type: GET_ONESHOPPINGLIST_ERROR});
    }
  }
}

export function deleteShoppinglists(){
  return({
    type: DELETE_ALLSHOPPINGLISTS_SUCCESS,
    payload: instance.delete(`${ROOT_URL}/shoppinglists`)
  });
}

export function deleteShoppinglist(list_id){
  return async (dispatch) => {
    try{
      const request = await instance.delete(`${ROOT_URL}/shoppinglists/${list_id}`)

      dispatch({
        type: DELETE_ONESHOPPINGLIST_SUCCESS,
        payload: request
      })
      window.location.reload()
    }catch(error) {
      dispatch({type: DELETE_ONESHOPPINGLIST_ERROR});
    }
  }
}
