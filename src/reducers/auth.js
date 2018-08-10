import {
  GET_CREDENTIAL_BEGIN,
  GET_CREDENTIAL_SUCCESS,
  GET_CREDENTIAL_FAILURE
} from '../constants/authTypes'

const initialState = {
  creadential: [],
  loading: false,
  error: null
}

export default function authReducer(state = initialState, action) {
  switch(action.type) {
    case GET_CREDENTIAL_BEGIN:
      return {
        ...state,
        loading: true,
        error: null,
      }

    case GET_CREDENTIAL_SUCCESS:
      return {
        ...state,
        loading: false,
        creadential: action.payload.response,
      }

    case GET_CREDENTIAL_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload.error,
      }

    default:
      // Always have a default case in reducer
      return state;
  }

}
