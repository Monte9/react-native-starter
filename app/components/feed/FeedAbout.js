import React, { Component } from 'react'
import { View, Text } from 'react-native'
import { connect } from 'react-redux'

import { pop_feed } from '../../actions/navigation'

const styles = {
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1
  },
}

class FeedAbout extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>More about the feed here!</Text>
        <Text onPress={() => this.props.dispatch(pop_feed())}>Back</Text>
      </View>
    )
  }
}

export default connect()(FeedAbout)
