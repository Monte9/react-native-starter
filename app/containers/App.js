import React, { Component } from 'react'
import { AppRegistry } from 'react-native'
import { Provider } from 'react-redux'

import SideMenuContainer from './SideMenuContainer'
import configureStore from '../config/configureStore'

const store = configureStore()

export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <SideMenuContainer />
      </Provider>
    )
  }
}
