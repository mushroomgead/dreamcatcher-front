import axios from 'axios';
import {
  CREATE_USER_BEGIN,
  CREATE_USER_SUCCESS,
  CREATE_USER_FAILURE,
} from '../constants/userTypes';

const ENDPOINT = 'http://localhost:3000'

export const createUserBegin = () => ({
  type: CREATE_USER_BEGIN
})

export const createUserSuccess = () => ({
  type: CREATE_USER_SUCCESS
})

export const createUserFailure = () => ({
  type: CREATE_USER_FAILURE
})

export function createUser(data) {
  return (dispatch) => {
    dispatch(createUserBegin());
    return axios({
      method: 'post',
      url: ENDPOINT + '/auth/register',
      data: {
        email: data.email,
        password: data.password,
        username: data.username,
      }
    })
    .then((response) => {
      console.log(response, 'response');

      dispatch(createUserSuccess(response))
    })
    .catch((error) => {
      dispatch(createUserFailure(error))
    })
  }
}
