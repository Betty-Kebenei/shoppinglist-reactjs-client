import instance from './AxiosInstance';
const ROOT_URL = 'http://localhost:5000';

export const POST_SHOPPINGLIST_SUCCESS = 'post_shoppinglist_success';
export const POST_SHOPPINGLIST_ERROR = 'post_shoppinglist_success';
export const GET_ALLSHOPPINGLISTS_SUCCESS = 'get_allshoppinglists_success';
export const GET_ONESHOPPINGLIST_SUCCESS = 'get_oneshoppinglist_success';

export function postShoppinglist(values, callback){
  return async (dispatch) => {
    try {
      const request = await instance.post(`${ROOT_URL}/shoppinglists`, values);

      dispatch({
        type: POST_SHOPPINGLIST_SUCCESS ,
        payload: request
      })
      .then(() => callback());
    }catch(error){
      dispatch({
        type: POST_SHOPPINGLIST_ERROR,
        payload: 'Shoppping list name already exists.'
      });
    }
  }; 
}

export function getAllShoppinglists(){
     return({
        type: GET_ALLSHOPPINGLISTS_SUCCESS,
        payload: instance.get(`${ROOT_URL}/shoppinglists`)
      });
}

export function getOneShoppinglist(id){
  return({
     type: GET_ONESHOPPINGLIST_SUCCESS,
     payload: instance.get(`${ROOT_URL}/shoppinglists/${id}`)
   });
}