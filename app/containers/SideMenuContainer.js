import React, { Component } from 'react'
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity
} from 'react-native'

import { connect } from 'react-redux'
import SideMenu from 'react-native-side-menu'

import TabContainer from './TabContainer'
import SideMenuView from '../components/SideMenuView'

class Button extends Component {
  handlePress(e) {
    if (this.props.onPress) {
      this.props.onPress(e);
    }
  }

  render() {
    return (
      <TouchableOpacity
        onPress={this.handlePress.bind(this)}
        style={this.props.style}>
        <Text>{this.props.children}</Text>
      </TouchableOpacity>
    );
  }
}

export default class SideMenuContainer extends Component {
  state = {
    isOpen: false,
    selectedItem: 'About',
    disableGestures: false,
  };

  toggle() {
    this.setState({
      isOpen: !this.state.isOpen,
    });
  }

  updateMenuState(isOpen) {
    this.setState({ isOpen });
  }

  onMenuItemSelected = (item) => {
    this.setState({
      isOpen: false,
      selectedItem: item,
    });
  }

  disableGestures(value) {
    this.setState({
      disableGestures: value,
    });
  }

  render() {
    const sideMenu = <SideMenuView onItemSelected={this.onMenuItemSelected} />;

    return (
      <SideMenu
        menu={sideMenu}
        isOpen={this.state.isOpen}
        disableGestures={this.state.disableGestures}
        onChange={(isOpen) => this.updateMenuState(isOpen)}>
        <TabContainer disableGestures={this.disableGestures.bind(this)}/>
        {/* <Button style={styles.button} onPress={() => this.toggle()}>
          <Image
            source={require('../images/menu.png')} style={{width: 32, height: 32}} />
        </Button> */}
      </SideMenu>
    );
  }
}

const styles = StyleSheet.create({
  button: {
    position: 'absolute',
    top: 20,
    padding: 10,
  },
  caption: {
    fontSize: 20,
    fontWeight: 'bold',
    alignItems: 'center',
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
