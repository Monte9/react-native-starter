import { createStore, applyMiddleware } from 'redux'
import rootReducer from '../reducers/rootReducer'

export default function configureStore () {
  const store = createStore(rootReducer)

  if (module.hot) {
    module.hot.accept(() => {
      const nextRootReducer = require('../reducers/rootReducer').default
      store.replaceReducer(nextRootReducer)
    })
  }
  return store
}
