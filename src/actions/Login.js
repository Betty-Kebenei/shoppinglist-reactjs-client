import axios from 'axios';
import toastr from 'toastr';
import * as types from './ActionTypes';

const ROOT_URL = 'https://flaskapiv1.herokuapp.com';

export const loginUser = (values, callback) => {
    return async (dispatch) => {
        try {
            const request = await axios.post(`${ROOT_URL}/auth/login`, values);

            dispatch({type: types.LOGIN_SUCCESS});
            localStorage.setItem('access_token', request.data.access_token)
            callback()
        }catch(error){ 
            toastr.error(error.response.data.message);          
        }
    };
}

export const logoutUser = () => {
    localStorage.clear();
    return({
        type: types.NOT_LOGGEDIN
    });
}

