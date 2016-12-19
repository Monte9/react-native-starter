import React, { Component } from 'react'
import { View, ScrollView } from 'react-native'
import { connect } from 'react-redux'

import { PricingCard, Text } from 'react-native-elements'
import Icon from 'react-native-vector-icons/Ionicons'

import colors from '../../colors'
import { push_portfolio } from '../../actions/navigation'

class PortfolioHome extends Component {
  render() {
    return (
      <ScrollView style={styles.container}>
        <View style={styles.headingContainer}>
          <View style={styles.headerIcon}>
            <Icon color='white' name='ios-briefcase' size={100} />
          </View>
          <View style={styles.headerText}>
            <View style={{flexDirection: 'row'}}>
              <View style={styles.balanceView}>
                <Text style={styles.balanceText}>Contributions: </Text>
              </View>
              <Text style={styles.balanceScore}>27</Text>
            </View>
            <View style={{flexDirection: 'row'}}>
              <View style={styles.balanceView}>
                <Text style={styles.balanceText}>Impace Score: </Text>
              </View>
              <Text style={styles.balanceScore}>89</Text>
            </View>
            <View style={{flexDirection: 'row'}}>
              <View style={styles.balanceView}>
                <Text style={styles.balanceText}>Total:   </Text>
              </View>
              <Text style={styles.balanceScore}>$550</Text>
            </View>
          </View>
        </View>
        <View style={styles.bodycontainer}>
          <PricingCard
            color={colors.secondary2}
            title='Wallet'
            price='$125'
            info={['(balance)', 'Card Ending 4967', "Valid till '19"]}
            button={{ title: 'RELOAD', icon: 'repeat' }}
            onButtonPress={() => this.props.dispatch(push_portfolio({ key: 'Reload', type: 'reload' }))}
          />
        </View>
      </ScrollView>
    )
  }
}

const styles = {
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: colors.grey5
  },
  headingContainer: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: colors.secondary2,
    paddingLeft: 30,
    paddingRight: 30,
  },
  headerIcon: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
  },
  headerText: {
    flex: 2,
    paddingLeft: 20,
    paddingTop: 10,
    paddingBottom: 10,
  },
  balanceView: {
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
  },
  balanceText: {
    fontSize: 15,
    color: colors.grey5,
    paddingTop: 10,
  },
  balanceScore: {
    fontSize: 50,
    color: 'white',
  },
  bodycontainer: {
    flex: 3,
    paddingTop: 10,
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
