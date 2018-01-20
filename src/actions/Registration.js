import axios from 'axios';

export const REGISTER_USER = 'register_user';
export const REGISTER_ERROR = 'register_error';

const ROOT_URL = 'http://localhost:5000'

export function createUser(values, callback){
    return async (dispatch) => {
        try{
            const request = axios.post(`${ROOT_URL}/auth/register`, values)

            dispatch({type: REGISTER_USER});
            callback()
        }catch(error){
            dispatch({
                type: REGISTER_ERROR,
                payload: error.response.data.message
            });
        }
    }
}

