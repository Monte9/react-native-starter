import React, { Component, PropTypes } from 'react'
import { View, Text, NavigationExperimental } from 'react-native'

const {
  Header: NavigationHeader,
} = NavigationExperimental

class Header extends Component {
  _back = () => {
    this.props.pop()
  }

  _renderTitleComponent= (props) => {
    return (
      <NavigationHeader.Title>
        {props.scene.route.key}
      </NavigationHeader.Title>
    );
  }

  render() {
    return (
      <NavigationHeader
        {...this.props}
        renderTitleComponent={this._renderTitleComponent}
        onNavigateBack={this._back}
      />
    );
  }
}

export default Header;
