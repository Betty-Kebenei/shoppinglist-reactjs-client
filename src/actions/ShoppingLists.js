import instance from './AxiosInstance';
import * as types from '../actions/ActionTypes';

import toastr from 'toastr';

const ROOT_URL = 'https://flaskapiv1.herokuapp.com';

export const postShoppinglist = (values, callback) => {
  return async (dispatch) => {
    try {
      const request = await instance.post(`${ROOT_URL}/shoppinglists`, values);

      dispatch({
        type: types.POST_SHOPPINGLIST_SUCCESS,
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
        type: types.UPDATE_SHOPPINGLIST_SUCCESS,
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
        type: types.GET_ALLSHOPPINGLISTS_SUCCESS,
        payload: request
      })
    }catch(error) {
      if(error.response.data.message === 'Sorry your token expired, please log in again!'){
        dispatch({type: types.NOT_LOGGEDIN})
      }
    }
  }
}

export const getOneShoppinglist = (id) => {
  const request = instance.get(`${ROOT_URL}/shoppinglists/${id}`)
  return({
    type: types.GET_ONESHOPPINGLIST_SUCCESS,
    payload: request
  });
}

export const deleteShoppinglists = () => {
  return({
    type: types.DELETE_ALLSHOPPINGLISTS_SUCCESS,
    payload: instance.delete(`${ROOT_URL}/shoppinglists`)
  });
}

export const deleteShoppinglist = (list_id) => {
  return async (dispatch) => {
    try {
      const request = await instance.delete(`${ROOT_URL}/shoppinglists/${list_id}`)

      dispatch({
        type: types.DELETE_ONESHOPPINGLIST_SUCCESS,
        payload: request
      })
      window.location.reload();
    }catch(error){
      toastr.error(error.response.data.message);
    }};
 }

export const paginateLists = (limit, page) => {
  return({
    type: types.PAGINATE_SHOPPINGLIST,
    payload: instance.get(`${ROOT_URL}/shoppinglists?limit=${limit}&page=${page}`)
  });
}

export const searchShoppinglist = (term) =>{
  return async (dispatch) => {
    try{
      const request = await instance.get(`${ROOT_URL}/shoppinglists?q=${term}`)

      dispatch({
        type: types.SEARCH_SHOPPINGLIST,
        payload: request
      })
    }catch(error) {
      dispatch({
        type: types.SEARCH_SHOPPINGLIST_ERROR,
        payload: error
      })
    }
  }
}
