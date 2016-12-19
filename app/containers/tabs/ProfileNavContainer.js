import React, { Component, PropTypes } from 'react'
import { View, Text, NavigationExperimental } from 'react-native'
import { connect } from 'react-redux'

import { push_profile, pop_profile } from '../../actions/navigation'

import Header from '../../components/headers/NavHeader'
import ModalHeader from '../../components/headers/ModalHeader'

import ProfileHome from '../../components/profile/ProfileHome'
import ProfileHistory from '../../components/profile/ProfileHistory'
import EditProfile from '../../components/profile/EditProfile'
import ChangePassword from '../../components/profile/ChangePassword'
import CardDetails from '../../components/profile/CardDetails'
import Updates from '../../components/profile/Updates'

const {
  CardStack: NavigationCardStack,
} = NavigationExperimental

class ProfileNavContainer extends Component {
  _renderScene = (props) => {
    switch(props.scene.route.key) {
      case 'Profile':
        return <ProfileHome changeTab={this.props.changeTab}/>
      case 'History':
        return <ProfileHistory />
      case 'EditProfile':
        return <EditProfile />
      case 'ChangePassword':
        return <ChangePassword />
      case 'CardDetails':
        return <CardDetails />
      case 'Updates':
        return <Updates />
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
