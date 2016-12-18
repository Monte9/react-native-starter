import React, { Component, PropTypes } from 'react'
import { View, Text, NavigationExperimental } from 'react-native'
import { connect } from 'react-redux'

import { push, pop } from '../actions/navigation'

import Header from '../components/headers/NavHeader'
import ModalHeader from '../components/headers/ModalHeader'

import Home from '../components/Home'
import About from '../components/About'
import Login from '../components/Login'
import Signup from '../components/SignupView'

const {
  CardStack: NavigationCardStack,
} = NavigationExperimental

class HomeNavContainer extends Component {
  _renderScene = (props) => {
    switch(props.scene.route.key) {
      case 'Home':
        return <Home hideTabBar={this.props.hideTabBar} disableGestures={this.props.disableGestures} />
      case 'About':
        return <About />
      case 'Login':
        return <Login hideTabBar={this.props.hideTabBar} disableGestures={this.props.disableGestures} />
      case 'Signup':
        return <Signup hideTabBar={this.props.hideTabBar} disableGestures={this.props.disableGestures} />
    }
  }

  _renderHeader = (sceneProps) => {
    const { navState } = this.props

    if (navState.prevPushedRoute && navState.prevPushedRoute.type === 'modal' && navState.prevPushedRoute.key === navState.routes[navState.index].key) {
      return (
        <ModalHeader
          pop={this.props.pop}
          {...sceneProps}
        />
      );
    } else if (navState.routes[navState.index].type === 'login' || navState.routes[navState.index].type === 'signup') {
      return
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
    if (navState.prevPushedRoute && ( navState.prevPushedRoute.type === 'modal' || navState.prevPushedRoute.type === 'login' )) {
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

const mapStateToProps = (state) => ({
  navState: state.navState,
})

export default connect(
  mapStateToProps,
  {
    push: (route) => push(route),
    pop: () => pop(),
  }
)(HomeNavContainer)
