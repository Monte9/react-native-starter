import React, { Component } from 'react'
import { View, Text } from 'react-native'
import { connect } from 'react-redux'
import { push_profile } from '../../actions/navigation'

const styles = {
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1
  },
}

class ProfileHome extends Component {
  componentDidMount() {
    if(true) {
      // this.props.hideTabBar()
      // this.props.dispatch(push({ key: 'Login', type: 'login' }))
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <Text>Love it!</Text>
        <Text onPress={() => this.props.dispatch(push_profile({ key: 'About' }))}>Go To About</Text>
        <Text onPress={() => this.props.dispatch(push_profile({ key: 'About', type: 'modal' }))}>Go To About With Modal</Text>
      </View>
    )
  }
}

export default connect()(ProfileHome)
