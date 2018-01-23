import axios from 'axios';

import toastr from 'toastr';

export const REGISTER_USER = 'register_user';

const ROOT_URL = 'http://localhost:5000'

export function createUser(values, callback){
    return async (dispatch) => {
        try{
            const request = await axios.post(`${ROOT_URL}/auth/register`, values)

            dispatch({type: REGISTER_USER});
            callback()
        }catch(error){
            toastr.error(error.response.data.message); 
        }
    }
}

