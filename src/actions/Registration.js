import axios from 'axios';

export const REGISTER_USER = 'register_user';

const ROOT_URL = 'http://localhost:5000'

export function createUser(values){
    const request = axios.post(`${ROOT_URL}/auth/register`, values)
    .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log('We got an error ',error);
      });
    return{
        type: REGISTER_USER,
        payload: request
    };
}