import React, { Component, PropTypes } from 'react'
import { View, Text, NavigationExperimental } from 'react-native'

import Home from '../components/Home'
import About from '../components/About'
import Header from './NavHeader'
import ModalHeader from './ModalHeader'

const {
  CardStack: NavigationCardStack,
} = NavigationExperimental

let styles = {}

class NavigationCardStackContainer extends Component {
  _renderScene = (props) => {
    switch(props.scene.route.key) {
      case 'Home':
        return <Home />
      case 'About':
        return <About />
    }
  }

  _renderHeader = (sceneProps) => {
    const { navState } = this.props

    console.log(navState)

    if (navState.prevPushedRoute && navState.prevPushedRoute.type === 'modal' && navState.prevPushedRoute.key === navState.routes[navState.index].key) {
      return (
        <ModalHeader
          pop={this.props.pop}
          {...sceneProps}
        />
      );
    } else {
      return (
        <Header
          pop={this.props.pop}
          {...sceneProps}
        />
      );
    }
  }
  render() {
    const { navState } = this.props
    let direction = 'horizontal'
    if (navState.prevPushedRoute && navState.prevPushedRoute.type === 'modal') {
      direction = 'vertical'
    }

    return (
      <NavigationCardStack
        direction={direction}
        renderHeader={this._renderHeader}
        navigationState={this.props.navState}
        renderScene={this._renderScene}
      />
    )
  }
}

styles = {
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1
  },
}

export default NavigationCardStackContainer;
