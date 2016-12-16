import React, { Component, PropTypes } from 'react'
import {
  View,
  Text,
  NavigationExperimental,
  Image,
  TouchableHighlight
} from 'react-native'

const {
  Header: NavigationHeader,
} = NavigationExperimental

class Header extends Component {
  _back = () => {
    this.props.pop()
  }

  _renderTitleComponent = (props) => {
    return (
      <NavigationHeader.Title>
        {props.scene.route.key}
      </NavigationHeader.Title>
    );
  }

  _renderCloseIcon = (props) => {
    return (
      <TouchableHighlight
        style={{justifyContent: 'center', alignSelf: 'center', alignItems: 'center', flex: 1, paddingLeft: 15,}}
        onPress={this._back}>
        <Image
          style={{width: 25, height: 25}}
          source={require('../../images/close.png')}
        />
      </TouchableHighlight>
    )
  }

  render() {
    return (
      <NavigationHeader
        {...this.props}
        renderTitleComponent={this._renderTitleComponent}
        renderLeftComponent={this._renderCloseIcon}
        onNavigateBack={this._back}
      />
    );
  }
}

export default Header;
