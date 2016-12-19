import React, { Component } from 'react'
import { View, ScrollView } from 'react-native'
import { connect } from 'react-redux'

import { PricingCard, Text } from 'react-native-elements'
import Icon from 'react-native-vector-icons/MaterialIcons'

import colors from '../../colors'
import { push_portfolio } from '../../actions/navigation'

class PortfolioHome extends Component {
  componentDidMount() {
    if(true) {
      // this.props.hideTabBar()
      // this.props.dispatch(push({ key: 'Login', type: 'login' }))
    }
  }

  render() {
    return (
      <ScrollView style={{backgroundColor: 'white'}}>
        <View style={styles.headingContainer}>
          <Icon color='white' name='games' size={62} />
          <Text style={styles.heading}>Pricing</Text>
        </View>
        <View style={styles.container}>
          <PricingCard
            color={colors.secondary2}
            title='Free'
            price='$0'
            info={['1 User', 'Basic Support', 'All Core Features']}
            button={{ title: 'GET STARTED', icon: 'flight-takeoff' }}
          />
        </View>
      </ScrollView>
    )
  }
}

const styles = {
  headingContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    padding: 40,
    backgroundColor: colors.grey2
  },
  heading: {
    color: 'white',
    marginTop: 10,
    fontSize: 22
  },
  bodycontainer: {
    margin: 15
  },
}

export default connect()(PortfolioHome)
