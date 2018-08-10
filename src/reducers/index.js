import { combineReducers } from 'redux'
import counters from './counters'
import auth from './auth'
import user from './user'

export default combineReducers({
  counters,
  auth,
  user,
})
