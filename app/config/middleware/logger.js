import _ from 'lodash'

const DO_NOT_LOG = [
  'EFFECT_TRIGGERED', 'EFFECT_RESOLVED', 'EFFECT_REJECTED'
]

export default store => next => action => {
  const state = store.getState()

  if( (! _.includes( DO_NOT_LOG, action.type ) ) ) {
    console.info( 'Dispatching: ', action )
  }

  let result = next( action )

  if( ( ! _.includes( DO_NOT_LOG, action.type ) ) ) {
    console.log( 'Next State: ', store.getState() )
  }

  return result
}
