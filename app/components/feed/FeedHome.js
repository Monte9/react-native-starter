import React, { Component } from 'react'
import { View, Text } from 'react-native'
import { connect } from 'react-redux'

import { push_feed } from '../../actions/navigation'

const styles = {
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1
  },
}

class FeedHome extends Component {
  componentDidMount() {
    if(true) {
      // this.props.hideTabBar()
      // this.props.dispatch(push({ key: 'Login', type: 'login' }))
    }
    this.props.hideTabBar(false)
    this.props.disableGestures(false)
  }

  render() {
    return (
      <View style={styles.container}>
        <Text>Hello from FeedHome</Text>
        <Text onPress={() => this.props.dispatch(push_feed({ key: 'About' }))}>Go To About</Text>
        <Text onPress={() => this.props.dispatch(push_feed({ key: 'About', type: 'modal' }))}>Go To About With Modal</Text>
      </View>
    )
  }
}

export default connect()(FeedHome)
