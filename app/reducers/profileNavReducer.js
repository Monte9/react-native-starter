import {
  PUSH_ROUTE_PROFILE,
  POP_ROUTE_PROFILE
} from '../actions/navigation'

import pushRoute from './nav/push_route'
import popRoute from './nav/pop_route'

const initialState = {
  index: 0,
  routes: [{ key: 'Profile', type: 'home' }],
}

export default function( state = initialState, action ) {
  switch (action.type) {
    case PUSH_ROUTE_PROFILE:
      return pushRoute( state, action )
    case POP_ROUTE_PROFILE:
      return popRoute( state, action )
    default:
      return state
  }
}
