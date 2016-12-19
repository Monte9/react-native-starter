import {
  PUSH_ROUTE_FEED,
  POP_ROUTE_FEED,
  RESTART_ROUTE_FEED
} from '../actions/navigation'

import pushRoute from './nav/push_route'
import popRoute from './nav/pop_route'
import restartRoute from './nav/restart_route'

const initialState = {
  index: 0,
  routes: [{ key: 'Login', type: 'login' }],
}

export default function( state = initialState, action ) {
  switch (action.type) {
    case PUSH_ROUTE_FEED:
      return pushRoute( state, action )
    case POP_ROUTE_FEED:
      return popRoute( state, action )
    case RESTART_ROUTE_FEED:
      return restartRoute( state, action )
    default:
      return state
  }
}
