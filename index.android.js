import React from 'react'
import { AppRegistry } from 'react-native'
import NavRootContainer from './app/navigation/NavRootContainer'
import configureStore from './app/config/configureStore'
import { Provider } from 'react-redux'
const store = configureStore()

const App = () => (
  <Provider store={store}>
    <NavRootContainer />
  </Provider>
)

AppRegistry.registerComponent('ReactNativeStarter', () => App);
