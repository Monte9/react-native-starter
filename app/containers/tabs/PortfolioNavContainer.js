import React, { Component, PropTypes } from 'react'
import { View, Text, NavigationExperimental } from 'react-native'
import { connect } from 'react-redux'

import { push_portfolio, pop_portfolio } from '../../actions/navigation'

import Header from '../../components/headers/NavHeader'
import ModalHeader from '../../components/headers/ModalHeader'

import PortfolioHome from '../../components/portfolio/PortfolioHome'
import PortfolioReload from '../../components/portfolio/PortfolioReload'

const {
  CardStack: NavigationCardStack,
} = NavigationExperimental

class PortfolioNavContainer extends Component {
  _renderScene = (props) => {
    switch(props.scene.route.key) {
      case 'Portfolio':
        return <PortfolioHome />
      case 'Reload':
        return <PortfolioReload />
    }
  }

  _renderHeader = (sceneProps) => {
    const { portfolioNavState } = this.props

    if (portfolioNavState.prevPushedRoute && portfolioNavState.prevPushedRoute.type === 'modal' && portfolioNavState.prevPushedRoute.key === portfolioNavState.routes[portfolioNavState.index].key) {
      return (
        <ModalHeader
          pop={this.props.pop}
          {...sceneProps}
        />
      );
    } else if (portfolioNavState.routes[portfolioNavState.index].type === 'login' || portfolioNavState.routes[portfolioNavState.index].type === 'signup') {
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
    const { portfolioNavState } = this.props
    let direction = 'horizontal'
    if (portfolioNavState.prevPushedRoute && ( portfolioNavState.prevPushedRoute.type === 'modal' || portfolioNavState.prevPushedRoute.type === 'login' )) {
      direction = 'vertical'
    }

    return (
      <NavigationCardStack
        direction={direction}
        renderHeader={this._renderHeader}
        navigationState={this.props.portfolioNavState}
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
  portfolioNavState: state.portfolioNavState,
})

export default connect(
  mapStateToProps,
  {
    push: (route) => push_portfolio(route),
    pop: () => pop_portfolio(),
  }
)(PortfolioNavContainer)
