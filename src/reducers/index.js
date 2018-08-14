import { combineReducers } from 'redux'
import counters from './counters'
import auth from './auth'
import user from './user'
import dreamlist from './dreamlist'

export default combineReducers({
  counters,
  auth,
  user,
  dreamlist,
})
