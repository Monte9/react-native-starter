import { combineReducers } from 'redux'
import navState from './navReducer'

const rootReducer = combineReducers({
  navState,
})

export default rootReducer
