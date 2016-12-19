import React, { Component } from 'react'
import { View, Text } from 'react-native'
import { connect } from 'react-redux'
import { pop_profile } from '../../actions/navigation'

const styles = {
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1
  },
}

class ProfileReload extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>LOLOLOL!! I love it!</Text>
        <Text onPress={() => this.props.dispatch(pop_profile())}>Back</Text>
      </View>
    )
  }
}

export default connect()(ProfileReload)
