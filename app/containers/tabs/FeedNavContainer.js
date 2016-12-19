import React, { Component, PropTypes } from 'react'
import { View, Text, NavigationExperimental } from 'react-native'
import { connect } from 'react-redux'

import { push_feed, pop_feed } from '../../actions/navigation'

import Header from '../../components/headers/NavHeader'
import ModalHeader from '../../components/headers/ModalHeader'

import FeedHome from '../../components/feed/FeedHome'
import FeedExplore from '../../components/feed/FeedExplore'

import Login from '../../components/Login'
import Signup from '../../components/SignupView'

const {
  CardStack: NavigationCardStack,
} = NavigationExperimental

class FeedNavContainer extends Component {
  _renderScene = (props) => {
    switch(props.scene.route.key) {
      case 'Feed':
        return <FeedHome hideTabBar={this.props.hideTabBar} disableGestures={this.props.disableGestures} />
      case 'Explore':
        return <FeedExplore />
      case 'Login':
        return <Login hideTabBar={this.props.hideTabBar} disableGestures={this.props.disableGestures} />
      case 'Signup':
        return <Signup hideTabBar={this.props.hideTabBar} disableGestures={this.props.disableGestures} />
    }
  }

  _renderHeader = (sceneProps) => {
    const { feedNavState } = this.props

    if (feedNavState.prevPushedRoute && feedNavState.prevPushedRoute.type === 'modal' && feedNavState.prevPushedRoute.key === feedNavState.routes[feedNavState.index].key) {
      return (
        <ModalHeader
          pop={this.props.pop}
          {...sceneProps}
        />
      );
    } else if (feedNavState.routes[feedNavState.index].type === 'login' || feedNavState.routes[feedNavState.index].type === 'signup') {
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
    const { feedNavState } = this.props
    let direction = 'horizontal'
    if (feedNavState.prevPushedRoute && ( feedNavState.prevPushedRoute.type === 'modal' || feedNavState.prevPushedRoute.type === 'login' )) {
      direction = 'vertical'
    }

    return (
      <NavigationCardStack
        direction={direction}
        renderHeader={this._renderHeader}
        navigationState={this.props.feedNavState}
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
  feedNavState: state.feedNavState,
})

export default connect(
  mapStateToProps,
  {
    push: (route) => push_feed(route),
    pop: () => pop_feed(),
  }
)(FeedNavContainer)
