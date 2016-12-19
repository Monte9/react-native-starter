import { combineReducers } from 'redux'

import user from './userReducer'
import feed from './feedReducer'

import feedNavState from './feedNavReducer'
import portfolioNavState from './portfolioNavReducer'
import profileNavState from './profileNavReducer'

export default combineReducers({
  user,
  feed,
  feedNavState,
  portfolioNavState,
  profileNavState,
})
