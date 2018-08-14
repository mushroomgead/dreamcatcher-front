// getDreamList, removeDream
import axios from 'axios';
import { API_ENDPOINT } from '../Environment'
import {
  GET_LIST_BEGIN,
  GET_LIST_SUCCESS,
  GET_LIST_FAILURE,
  REMOVE_LIST_BEGIN,
  REMOVE_LIST_SUCCESS,
  REMOVE_LIST_FAILURE,
  CHANGE_STATUS_BEGIN,
  CHANGE_STATUS_SUCCESS,
  CHANGE_STATUS_FAILURE
} from '../constants/dreamTypes';

export const getListBegin = () => ({
  type: GET_LIST_BEGIN
})

export const getListSuccess = (dataList) => ({
  type: GET_LIST_SUCCESS,
  payload: { dataList }
})

export const getListFailure = (error) => ({
  type: GET_LIST_FAILURE,
  payload: { error }
})

export const removeListBegin = () => ({
  type: REMOVE_LIST_BEGIN
})

export const removeListSuccess = () => ({
  type: REMOVE_LIST_SUCCESS
})

export const removeListFailure = (error) => ({
  type: REMOVE_LIST_FAILURE,
  payload: { error }
})

export const changeStatusBegin = () => ({
  type: CHANGE_STATUS_BEGIN,
})

export const changeStatusSuccess = () => ({
  type: CHANGE_STATUS_SUCCESS,
})

export const changeStatusFailure = (error) => ({
  type: CHANGE_STATUS_FAILURE,
  payload: { error }
})

export function getDreamList() {
  return (dispatch) => {
    dispatch(getListBegin());
    return axios({
      method: 'get',
      url: API_ENDPOINT + '/dreams',
    })
    .then((response) => {
      console.log(response.data, 'response');

      dispatch(getListSuccess(response.data))
    })
    .catch((error) => {
      console.log(error, 'error');

      dispatch(getListFailure(error))
    })
  }
}

export function removeDream(id) {
  return (dispatch) => {
    dispatch(removeListBegin());
    return axios({
      method: 'delete',
      url: API_ENDPOINT + '/dreams/' + id,
    })
    .then((response) => {
      console.log(response.data, 'response remove id');

      dispatch(removeListSuccess())
    })
    .catch((error) => {
      console.log(error, 'error');
      dispatch(removeListFailure(error))
    })
  }
}

export function updateData(id, dataUpdate) {
  return (dispatch) => {
    dispatch(changeStatusBegin());
    return axios({
      method: 'put',
      url: API_ENDPOINT + '/dreams/' + id,
      data: dataUpdate
    })
    .then((response) => {
      console.log(response.data, 'response done dream');

      dispatch(changeStatusSuccess())
    })
    .catch((error) => {
      console.log(error, 'error');
      dispatch(changeStatusFailure(error))
    })
  }
}
