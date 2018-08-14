import {
  GET_CREDENTIAL_BEGIN,
  GET_CREDENTIAL_SUCCESS,
  GET_CREDENTIAL_FAILURE,
  FORCE_LOGOUT_SUCCESS,
} from '../constants/authTypes'

const initialState = {
  response: [],
  fetching: false,
  error: null
}

export default function authReducer(state = initialState, action) {
  switch(action.type) {
    case GET_CREDENTIAL_BEGIN:
      return {
        ...state,
        fetching: true,
        error: null,
      }

    case GET_CREDENTIAL_SUCCESS:
      return {
        ...state,
        fetching: false,
        response: action.payload.credential.data,
      }

    case GET_CREDENTIAL_FAILURE:
      return {
        ...state,
        fetching: false,
        error: action.payload.error,
      }

    case FORCE_LOGOUT_SUCCESS:
      return state;

    default:
      // Always have a default case in reducer
      return state;
  }

}
