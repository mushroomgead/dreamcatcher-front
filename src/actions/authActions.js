import axios from 'axios';
import { API_ENDPOINT } from '../Environment'
import {
  GET_CREDENTIAL_BEGIN,
  GET_CREDENTIAL_SUCCESS,
  GET_CREDENTIAL_FAILURE,
  FORCE_LOGOUT_SUCCESS,
} from '../constants/authTypes';
import { saveState, clearState } from '../utility/localStorage'

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

export const forceLogoutSuccess = () => ({
  type: FORCE_LOGOUT_SUCCESS
})

export function getCredential(data) {
  return (dispatch) => {
    dispatch(getCredentialBegin());
    return axios({
      method: 'post',
      url: API_ENDPOINT + '/auth/login',
      data: {
        email: data.email,
        password: data.password,
      }
    })
    .then((response) => {
      saveState('token', response.data.token)
      dispatch(getCredentialSuccess(response))
    })
    .catch((error) => {
      console.log(error, 'error');

      dispatch(getCredentialFailure(error))
    })
  }
}

export function forceLogout(){
  return (dispatch) => {
    clearState()
    dispatch(forceLogoutSuccess())
  }
}
