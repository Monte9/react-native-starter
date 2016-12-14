import React from 'react'
import { View, Text } from 'react-native'
import { connect } from 'react-redux'
import { push } from '../actions/navActions'

const styles = {
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1
  },
}

const Home = ({ push }) => {
  return (
    <View style={styles.container}>
      <Text>Hello from Home</Text>
      <Text onPress={() => push({ key: 'About' })}>Go To About</Text>
      <Text onPress={() => push({ key: 'About', type: 'modal' })}>Go To About With Modal</Text>
    </View>
  )
}

function mapStateToProps () { return {} }

function mapDispatchToProps (dispatch) {
  return {
    push: (route) => dispatch(push(route))
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home)
