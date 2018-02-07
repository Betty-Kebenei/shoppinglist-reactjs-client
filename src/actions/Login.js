import axios from 'axios';
import toastr from 'toastr';

export const NOT_LOGGEDIN = 'not_loggedin';
export const LOGIN_SUCCESS = 'login_success';
export const LOGOUT_ERROR = 'logout_error';

const ROOT_URL = 'http://localhost:5000';

export function loginUser(values, callback){
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

export function logoutUser(){
    return async (dispatch) => {
        try {
            //const request = await instance.post(`${ROOT_URL}/auth/logout`);

            dispatch(
                {
                    type: NOT_LOGGEDIN
                }
            );
            localStorage.clear();
            window.location.reload()
        }catch(error){           
            dispatch(
                {
                    type: LOGOUT_ERROR,
                    payload: error.response.data.message
                    
                }
            );
        }
    };
}

export function logout(){
    localStorage.clear();
    return({
        type: NOT_LOGGEDIN
    });
}

