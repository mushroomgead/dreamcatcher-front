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
} from '../constants/dreamTypes'

const initialState = {
  response: [],
  fetching: false,
  error: null
}

export default function authReducer(state = initialState, action) {
  console.log(action, 'action.payload');

  switch(action.type) {
    case GET_LIST_BEGIN:
      return {
        ...state,
        fetching: true,
        error: null,
      }

    case GET_LIST_SUCCESS:
      return {
        ...state,
        fetching: false,
        response: action.payload.dataList
      }

    case GET_LIST_FAILURE:
      return {
        ...state,
        fetching: false,
        error: action.payload.error,
      }

    case REMOVE_LIST_BEGIN:
      return {
        ...state,
        fetching: true,
        error: null,
      }

    case REMOVE_LIST_SUCCESS:
      return {
        ...state,
        fetching: false,
      }

    case REMOVE_LIST_FAILURE:
      return {
        ...state,
        fetching: false,
        error: action.payload.error,
      }

    case CHANGE_STATUS_BEGIN:
      return {
        ...state,
        fetching: true,
        error: null,
      }

    case CHANGE_STATUS_SUCCESS:
      return {
        ...state,
        fetching: false,
      }

    case CHANGE_STATUS_FAILURE:
      return {
        ...state,
        fetching: false,
        error: action.payload.error,
      }

    default:
      // Always have a default case in reducer
      return state;
  }

}
