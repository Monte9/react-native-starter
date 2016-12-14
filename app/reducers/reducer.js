import { combineReducers } from 'redux'

import navState from './navReducer'
import userState from './userReducer'

export default combineReducers({
  navState, userState
})
