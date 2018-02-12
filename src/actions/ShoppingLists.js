import instance from './AxiosInstance';

import toastr from 'toastr';

const ROOT_URL = 'https://flaskapiv1.herokuapp.com';

export const POST_SHOPPINGLIST_SUCCESS = 'post_shoppinglist_success';
export const GET_ALLSHOPPINGLISTS_SUCCESS = 'get_allshoppinglists_success';
export const GET_ONESHOPPINGLIST_SUCCESS = 'get_oneshoppinglist_success';
export const UPDATE_SHOPPINGLIST_SUCCESS = 'update_shoppinglist_success';
export const DELETE_ALLSHOPPINGLISTS_SUCCESS = 'delete_allshoppinglists_success';
export const DELETE_ONESHOPPINGLIST_SUCCESS = 'delete_oneshoppinglist_success';
export const PAGINATE_SHOPPINGLIST = 'paginate_shoppinglist';
export const SEARCH_SHOPPINGLIST = 'search_shoppinglist';
export const SEARCH_SHOPPINGLIST_ERROR = 'search_shoppinglist_error';
export const NOT_LOGGEDIN = 'not_loggedin';

export const postShoppinglist = (values, callback) => {
  return async (dispatch) => {
    try {
      const request = await instance.post(`${ROOT_URL}/shoppinglists`, values);

      dispatch({
        type: POST_SHOPPINGLIST_SUCCESS,
        payload: request
      })

      dispatch(getAllShoppinglists())

    }catch(error){
      toastr.error(error.response.data.message); 
    }
  }; 
}

export const updateShoppinglist = (list_id, values, callback) =>{
  return async (dispatch) => {
    try {
      const request = await instance.put(`${ROOT_URL}/shoppinglists/${list_id}`, values);

      dispatch({
        type: UPDATE_SHOPPINGLIST_SUCCESS,
        payload: request
      })
      callback()
    }catch(error){
      toastr.error(error.response.data.message);
    }
  }; 
}

export const getAllShoppinglists = () => {
  return async (dispatch) => {
    try{
      const request = await instance.get(`${ROOT_URL}/shoppinglists`);

      dispatch({
        type: GET_ALLSHOPPINGLISTS_SUCCESS,
        payload: request
      })
    }catch(error) {
      if(error.response.data.message === 'Sorry your token expired, please log in again!'){
        dispatch({type: NOT_LOGGEDIN})
      }
    }
  }
}

export const getOneShoppinglist = (id) => {
  const request = instance.get(`${ROOT_URL}/shoppinglists/${id}`)
  return({
    type: GET_ONESHOPPINGLIST_SUCCESS,
    payload: request
  });
}

export const deleteShoppinglists = () => {
  return({
    type: DELETE_ALLSHOPPINGLISTS_SUCCESS,
    payload: instance.delete(`${ROOT_URL}/shoppinglists`)
  });
}

export const deleteShoppinglist = (list_id) => {
  return async (dispatch) => {
    try {
      const request = await instance.delete(`${ROOT_URL}/shoppinglists/${list_id}`)

      dispatch({
        type: DELETE_ONESHOPPINGLIST_SUCCESS,
        payload: request
      })
      window.location.reload();
    }catch(error){
      toastr.error(error.response.data.message);
    }};
 }

export const paginateLists = (limit, page) => {
  return({
    type: PAGINATE_SHOPPINGLIST,
    payload: instance.get(`${ROOT_URL}/shoppinglists?limit=${limit}&page=${page}`)
  });
}

export const searchShoppinglist = (term) =>{
  return async (dispatch) => {
    try{
      const request = await instance.get(`${ROOT_URL}/shoppinglists?q=${term}`)

      dispatch({
        type: SEARCH_SHOPPINGLIST,
        payload: request
      })
    }catch(error) {
      dispatch({
        type: SEARCH_SHOPPINGLIST_ERROR,
        payload: error
      })
    }
  }
}
