import axios from 'axios';
import {
  GET_CREDENTIAL_BEGIN,
  GET_CREDENTIAL_SUCCESS,
  GET_CREDENTIAL_FAILURE,
} from '../constants/authTypes';

const ENDPOINT = 'http://localhost:3000'

export const getCredentialBegin = () => ({
  type: GET_CREDENTIAL_BEGIN
})

export const getCredentialSuccess = (credential) => ({
  type: GET_CREDENTIAL_SUCCESS,
  payload: { credential }
})

export const getCredentialFailure = (error) => ({
  type: GET_CREDENTIAL_FAILURE,
  payload: { error }
})

export function getCredential(data) {
  return (dispatch) => {
    dispatch(getCredentialBegin());
    return axios({
      method: 'post',
      url: ENDPOINT + '/auth/login',
      data: {
        email: data.email,
        password: data.password,
      }
    })
    .then((response) => {
      dispatch(getCredentialSuccess(response))
    })
    .catch((error) => {
      console.log(error, 'error');

      dispatch(getCredentialFailure(error))
    })
  }
}
