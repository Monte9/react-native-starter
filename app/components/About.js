import React from 'react'
import { View, Text } from 'react-native'
import { connect } from 'react-redux'
import { pop } from '../actions/navigation'

const styles = {
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1
  },
}

const About = ({ pop }) => (
  <View style={styles.container}>
    <Text>Hello from About</Text>
    <Text onPress={() => pop()}>Back</Text>
  </View>
)

function mapStateToProps () { return {} }

function mapDispatchToProps (dispatch) {
  return {
    pop: () => dispatch(pop())
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(About)
