import axios from 'axios';

export const NOT_LOGGEDIN = 'not_loggedin';
export const LOGIN_SUCCESS = 'login_success';
export const LOGIN_ERROR = 'login_error';

const ROOT_URL = 'http://localhost:5000';

export function loginUser(values, callback){
    return async (dispatch) => {
        try {
            const request = await axios.post(`${ROOT_URL}/auth/login`, values);

            dispatch(
                {
                    type: LOGIN_SUCCESS
                }
            );
            localStorage.setItem('access_token', request.data.access_token)
            callback()
        }catch(error){
            dispatch(
                {
                    type: LOGIN_ERROR,
                    payload: 'You email or password is invalid!'
                }
            );
        }
    };
}

export function logoutUser(callback){
    localStorage.clear();
    return {
        type: NOT_LOGGEDIN
    };
    callback()
}
