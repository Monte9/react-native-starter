import { NavigationExperimental } from 'react-native'
const {
  StateUtils: NavigationStateUtils
} = NavigationExperimental

export default function( state, action ) {
  return NavigationStateUtils.pop(state)
}
