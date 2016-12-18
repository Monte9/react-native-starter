import React, { Component, PropTypes } from 'react'
import { View, Text, NavigationExperimental } from 'react-native'
import { connect } from 'react-redux'

import { push_profile, pop_profile } from '../../actions/navigation'

import Header from '../../components/headers/NavHeader'
import ModalHeader from '../../components/headers/ModalHeader'

import ProfileHome from '../../components/profile/ProfileHome'
import ProfileAbout from '../../components/profile/ProfileAbout'

const {
  CardStack: NavigationCardStack,
} = NavigationExperimental

class ProfileNavContainer extends Component {
  _renderScene = (props) => {
    switch(props.scene.route.key) {
      case 'Profile':
        return <ProfileHome />
      case 'About':
        return <ProfileAbout />
    }
  }

  _renderHeader = (sceneProps) => {
    const { profileNavState } = this.props

    if (profileNavState.prevPushedRoute && profileNavState.prevPushedRoute.type === 'modal' && profileNavState.prevPushedRoute.key === profileNavState.routes[profileNavState.index].key) {
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
    const { profileNavState } = this.props
    let direction = 'horizontal'
    if (profileNavState.prevPushedRoute && ( profileNavState.prevPushedRoute.type === 'modal' || profileNavState.prevPushedRoute.type === 'login' )) {
      direction = 'vertical'
    }

    return (
      <NavigationCardStack
        direction={direction}
        renderHeader={this._renderHeader}
        navigationState={this.props.profileNavState}
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
  profileNavState: state.profileNavState,
})

export default connect(
  mapStateToProps,
  {
    push: (route) => push_profile(route),
    pop: () => pop_profile(),
  }
)(ProfileNavContainer)
