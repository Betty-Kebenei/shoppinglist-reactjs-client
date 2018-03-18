import axios from 'axios';

import toastr from 'toastr';

import * as types from './ActionTypes';

const ROOT_URL = 'https://flaskapiv1.herokuapp.com';

export const createUser = (values, callback) => {
    return async (dispatch) => {
        try{
            const request = await axios.post(`${ROOT_URL}/auth/register`, values)

            dispatch({
                type: types.REGISTER_USER,
                payload: request
            });
            callback()
        }catch(error){
            toastr.error(error.response.data.message); 
        }
    }
}

