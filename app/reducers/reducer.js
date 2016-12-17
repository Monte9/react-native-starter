import { combineReducers } from 'redux'

import navState from './navReducer'
import userState from './userReducer'
import profileNavState from './profileReducer'

export default combineReducers({
  navState, userState, profileNavState
})
