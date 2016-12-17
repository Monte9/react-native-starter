import React from 'react'
import { View, Text } from 'react-native'
import { connect } from 'react-redux'
import { pop } from '../../actions/navigation'

const styles = {
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1
  },
}

const ProfileAbout = ({ pop }) => (
  <View style={styles.container}>
    <Text>LOLOLOL!! I love it!</Text>
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
)(ProfileAbout)
