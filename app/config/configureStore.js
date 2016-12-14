import { createStore, applyMiddleware } from 'redux'
import reducer from '../reducers/reducer'

import logger from './middleware/logger'

export default function configureStore( initialState ) {
  const middleware = [ logger ]
  const simpleStore = createStore( reducer, initialState, applyMiddleware( ...middleware ) )

  // if (module.hot) {
  //   module.hot.accept(() => {
  //     const nextReducer = require('../reducers/reducer').default
  //     store.replaceReducer(nextReducer)
  //   })
  // }

  return { ...simpleStore }
}
