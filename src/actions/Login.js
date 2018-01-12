import axios from 'axios';

// export const LOGIN_USER = 'login_user';

const ROOT_URL = 'http://localhost:5000'

export function loginUser(values, callback){
    const request = axios.post(`${ROOT_URL}/auth/login`, values)
    .then(() => callback());
    return{
        type: 'LOGIN',
        payload: request
    };
}