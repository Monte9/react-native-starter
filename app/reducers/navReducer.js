import { NavigationExperimental } from 'react-native'
const {
  StateUtils: NavigationStateUtils
} = NavigationExperimental

import { PUSH_ROUTE, POP_ROUTE } from '../constants/constants'

function navReducer(state, action) {
  if (!state) {
    return {
      index: 0,
      routes: [{ key: 'Home' }],
    }
  }
  switch (action.type) {
    case PUSH_ROUTE: {
      const routes = state.routes.slice();
      routes.push(action.route);
      return {
        ...state,
        prevPushedRoute: action.route,
        index: routes.length - 1,
        routes,
      }
    }
    case POP_ROUTE: {
      return NavigationStateUtils.pop(state)
    }
    default:
      return state
  }
}

export default navReducer
