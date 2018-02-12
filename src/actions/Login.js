import axios from 'axios';
import toastr from 'toastr';

export const NOT_LOGGEDIN = 'not_loggedin';
export const LOGIN_SUCCESS = 'login_success';
export const LOGOUT_ERROR = 'logout_error';

const ROOT_URL = 'https://flaskapiv1.herokuapp.com';

export const loginUser = (values, callback) => {
    return async (dispatch) => {
        try {
            const request = await axios.post(`${ROOT_URL}/auth/login`, values);

            dispatch({type: LOGIN_SUCCESS});
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
        type: NOT_LOGGEDIN
    });
}

