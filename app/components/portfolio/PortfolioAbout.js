import React, { Component } from 'react'
import { View, Text } from 'react-native'
import { connect } from 'react-redux'

import { pop_portfolio } from '../../actions/navigation'

const styles = {
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1
  },
}

class PortfolioAbout extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>Yaya THis is about the portfolio</Text>
        <Text onPress={() => this.props.dispatch(pop_portfolio())}>Back</Text>
      </View>
    )
  }
}

export default connect()(PortfolioAbout)
