import { combineReducers } from 'redux'

import userState from './userReducer'

import feedNavState from './feedReducer'
import portfolioNavState from './portfolioReducer'
import profileNavState from './profileReducer'

export default combineReducers({
  userState,
  feedNavState,
  portfolioNavState,
  profileNavState,
})
