import instance from './AxiosInstance';
import * as types from '../actions/ActionTypes';

import toastr from 'toastr';

const ROOT_URL = 'https://flaskapiv1.herokuapp.com';

export const postShoppinglist = (values) => {
  return dispatch => {
    return instance.post(`${ROOT_URL}/shoppinglists`, values).then( (response) => {
      console.log(response)
      dispatch({
        type: types.POST_SHOPPINGLIST_SUCCESS
      })
      dispatch(getAllShoppinglists())
    }).catch(error => {
      toastr.error(error.response.data.message); 
    });
  }
}

export const updateShoppinglist = (list_id, values, callback) => {
  return dispatch => {
    return instance.put(`${ROOT_URL}/shoppinglists/${list_id}`, values).then ( 
      (response) => {
        dispatch({
          type: types.UPDATE_SHOPPINGLIST_SUCCESS,
          payload: response
        })
        callback()
    }).catch(error => {
      toastr.error(error.response.data.message);
    })
  }
}

export const getAllShoppinglistsSuccess = (shoppingLists) => {
  return({
    type: types.GET_ALLSHOPPINGLISTS_SUCCESS,
    shoppingLists
  });
}

export const getAllShoppinglists = () => {
  return (dispatch) => {
    return instance.get(`${ROOT_URL}/shoppinglists`).then(response => {
      dispatch({
        type: types.GET_ALLSHOPPINGLISTS_SUCCESS,
        payload: response
      })
    }).catch(error => {
      // if(error.response.data.message === 'Sorry your token expired, please log in again!'){
      //   dispatch({type: types.NOT_LOGGEDIN})
      // }
    });
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
  return dispatch => {
    return instance.delete(`${ROOT_URL}/shoppinglists/${list_id}`).then( 
      (response) => {
        dispatch({
          type: types.DELETE_ONESHOPPINGLIST_SUCCESS,
          payload: response
        })
        dispatch(getAllShoppinglists())
    }).catch(error => {});
  }
}

export const paginateLists = (limit, page) => {
  return({
    type: types.PAGINATE_SHOPPINGLIST,
    payload: instance.get(`${ROOT_URL}/shoppinglists?limit=${limit}&page=${page}`)
  });
}

export const searchShoppinglist = (term) => {
  return dispatch => {
    return instance.get(`${ROOT_URL}/shoppinglists?q=${term}`).then( 
      response => {
        dispatch({
          type: types.SEARCH_SHOPPINGLIST,
          payload: response
        })
      }).catch(error => {
        dispatch({
          type: types.SEARCH_SHOPPINGLIST_ERROR,
          payload: error
        })
      })
  }
}

