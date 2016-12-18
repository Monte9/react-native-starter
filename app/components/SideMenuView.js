import React, { Component } from 'react'
import {
  Dimensions,
  StyleSheet,
  ScrollView,
  View,
  Image,
  Text,
  TouchableOpacity
} from 'react-native'
import { connect } from 'react-redux'
import { push } from '../actions/navigation'

import Icon from 'react-native-vector-icons/MaterialIcons'
import { Button } from 'react-native-elements'

const window = Dimensions.get('window');
const uri = 'https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg';

class SideMenuView extends Component {
  render() {
    return (
      <View style={styles.menu}>
        <View style={styles.menuHeader}>
          <Image
            style={styles.avatar}
            source={{ uri }}/>
          <View style={styles.profileText}>
            <Text style={styles.name}>Chris Jackson</Text>
            <Text style={styles.title}>Vice Chairman</Text>
          </View>
        </View>

        <View style={styles.menuBody}>
          <TouchableOpacity
            style={styles.iconContainer}
            onPress={() => console.log('Button Pressed')}>
            <Icon
              reverse
              name='group-work'
              size={35}
              color='#E91E63'
              style={styles.iconStyle}
              onPress={() => console.log('Button Pressed')} />
            <Text style={[styles.menuItemText, {color: '#E91E63'}]}>Maps</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.iconContainer}
            onPress={() => console.log('Button Pressed')}>
            <Icon
              reverse
              name='lightbulb-outline'
              size={35}
              style={styles.iconStyle}
              color='#3F51B5' />
            <Text style={[styles.menuItemText, {color: '#3F51B5'}]}>App Store</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.iconContainer}
            onPress={() => console.log('Button Pressed')}>
            <Icon
              reverse
              color='#00BCD4'
              size={35}
              name='pets'
              style={styles.iconStyle}
              onPress={() => console.log('Button Pressed')} />
            <Text style={[styles.menuItemText, {color: '#00BCD4'}]}>Analytics</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.iconContainer}
            onPress={() => console.log('Button Pressed')}>
            <Icon
              reverse
              color='#a82400'
              size={35}
              name='polymer'
              style={styles.iconStyle}
              onPress={() => console.log('Button Pressed')} />
            <Text style={[styles.menuItemText, {color: '#a82400'}]}>Sharing</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.iconContainer}
            onPress={() => console.log('Button Pressed')}>
            <Icon
              reverse
              color='#FF5722'
              size={35}
              name='touch-app'
              style={styles.iconStyle}
              onPress={() => console.log('Button Pressed')} />
            <Text style={[styles.menuItemText, {color: '#FF5722'}]}>One Touch</Text>
          </TouchableOpacity>
          <View style={styles.iconPadding} />
        </View>

        <View style={styles.menuFooter}>
          <Button
            buttonStyle={styles.logoutButton}
            raised
            backgroundColor='rgba(120, 216, 194, 1)'
            icon={{name: 'sign-out', type: 'font-awesome', color:'black'}}
            title='LOGOUT'
            textStyle={{color: 'black'}}/>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  menu: {
    flex: 1,
    flexDirection: 'column',
    width: window.width,
    height: window.height,
    backgroundColor: '#ededed',
    paddingTop: 20,
  },
  menuHeader: {
    flex: 2,
    flexDirection: 'row',
    paddingLeft: 20,
    paddingTop: 20,
  },
  menuBody: {
    flex: 10,
    flexDirection: 'column',
    backgroundColor: '#D8D8D8'
  },
  menuFooter: {
    flex: 1,
    flexDirection: 'row',
    paddingLeft: 20,
    paddingBottom: 30,
    backgroundColor: '#D8D8D8'
  },
  avatar: {
    width: 70,
    height: 70,
    borderRadius: 35,
    flex: 1,
  },
  profileText: {
    flex: 4,
    flexDirection: 'column',
    paddingLeft: 20,
  },
  name: {
    flex: 1,
    fontSize: 18,
    color: 'black',
    paddingTop: 15,
    paddingBottom: 10,
  },
  title: {
    flex: 3,
    fontSize: 13,
    color: 'grey'
  },
  iconContainer: {
    flex: 1,
    flexDirection: 'row',
    paddingTop: 20,
    paddingLeft: 20,
    paddingRight: 20,
  },
  iconPadding: {
    flex: 3,
  },
  iconStyle: {
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center'
  },
  menuItemText: {
    fontSize: 20,
    paddingLeft: 20,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center'
  },
  logoutButton: {
    width: window.width / 3 + 20,
  }
});

export default connect()(SideMenuView)
