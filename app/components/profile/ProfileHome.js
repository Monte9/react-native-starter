import React, { Component } from 'react'
import { View, ScrollView, Image } from 'react-native'
import { connect } from 'react-redux'

import { Text, List, ListItem } from 'react-native-elements'
import Icon from 'react-native-vector-icons/MaterialIcons'

import colors from '../../colors'
import settings_section from '../../sample_settings'
import { push_profile } from '../../actions/navigation'

const uri = 'https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg';

class ProfileHome extends Component {
  componentDidMount() {
    if(true) {
      // this.props.hideTabBar()
      // this.props.dispatch(push({ key: 'Login', type: 'login' }))
    }

    // onPress={() => this.props.dispatch(push_profile({ key: 'About' }))}
    // onPress={() => this.props.dispatch(push_profile({ key: 'About', type: 'modal' }))}
  }

  render() {
    return (
      <ScrollView style={styles.container}>
        <View style={styles.headingContainer}>
          <Image
            style={styles.avatar}
            source={{uri}}/>
          <View style={styles.userDetails}>
            <Text style={styles.headingName}>Chris Jackson</Text>
            <Text style={styles.headingTitle}>Vice Chairman</Text>
          </View>
        </View>
        <View style={styles.bodycontainer}>
          <List>
          {
            settings_section.map((item, index) => (
              <ListItem
                key={index}
                onPress={() => console.log("Profile Setting Item clicked")}
                title={item.title}
                icon={{name: item.icon}} />
            ))
          }
          </List>
          <List containerStyle={{marginBottom: 10}}>
            <ListItem
              key={1}
              hideChevron={true}
              onPress={() => console.log("Log out user!")}
              title='LOGOUT'
              titleStyle={styles.logoutText}
              icon={{name: ''}} />
          </List>
        </View>
      </ScrollView>
    )
  }
}

const styles = {
  container: {
    flex: 1,
    backgroundColor: colors.grey5
  },
  headingContainer: {
    flex: 2,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor: colors.primary2
  },
  bodycontainer: {
    flex: 3,
    paddingTop: 10,
  },
  avatar: {
    width: 100,
    height: 100,
    borderRadius: 50,
    flex: 1,
  },
  userDetails: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 20,
  },
  headingName: {
    color: 'white',
    fontSize: 22
  },
  headingTitle: {
    color: colors.grey1,
    fontSize: 17
  },
  logoutText: {
    color: 'red',
    textAlign: 'center',
  }
}

export default connect()(ProfileHome)
