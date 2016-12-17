import React, { Component } from 'react'
import { StyleSheet, Platform } from 'react-native'
import TabNavigator from 'react-native-tab-navigator';
import Icon from 'react-native-vector-icons/MaterialIcons'
import colors from '../colors'
// import fonts from 'HSFonts'

import HomeNavContainer from './HomeNavContainer'
import ProfileNavContainer from './ProfileNavContainer'
// import Contact from './contact/ContactRootContainer'
// import Pricing from './pricing/PricingRootContainer'
// import More from './more/MoreRootContainer'

class TabContainer extends Component {
  constructor () {
    super()
    this.state = {
      selectedTab: 'home',
      hideTabBar: false,
    }
    this.changeTab = this.changeTab.bind(this)
  }

  changeTab (selectedTab) {
    this.setState({
      selectedTab
    })
  }

  _hideTabBar() {
    this.setState({
      hideTabBar: !this.state.hideTabBar
    });
  }

  render () {
    const { toggleSideMenu } = this.props
    const { selectedTab } = this.state

    let tabBarStyle = {};
    let sceneStyle = {};
    if (this.state.hideTabBar) {
      tabBarStyle.height = 0;
      tabBarStyle.overflow = 'hidden';
      sceneStyle.paddingBottom = 0;
    }

    return (
      <TabNavigator hidesTabTouch tabBarStyle={tabBarStyle} sceneStyle={sceneStyle}>
        <TabNavigator.Item
          titleStyle={[styles.titleStyle]}
          selectedTitleStyle={[styles.titleSelected, {marginTop: -3, marginBottom: 7}]}
          selected={selectedTab === 'home'}
          title={selectedTab === 'home' ? 'HOME' : null}
          renderIcon={() => <Icon color={colors.grey2} name='whatshot' size={26} />}
          renderSelectedIcon={() => <Icon color={colors.primary} name='whatshot' size={26} />}
          onPress={() => this.changeTab('home')}>
          <HomeNavContainer hideTabBar={this._hideTabBar.bind(this)} />
        </TabNavigator.Item>
        <TabNavigator.Item
          tabStyle={selectedTab !== 'about' && { marginBottom: -6 }}
          titleStyle={[styles.titleStyle, {marginTop: -1}]}
          selectedTitleStyle={[styles.titleSelected, {marginTop: -3, marginBottom: 7}]}
          selected={selectedTab === 'about'}
          title={selectedTab === 'about' ? 'ABOUT' : null}
          renderIcon={() => <Icon style={{paddingBottom: 4}} color={colors.grey2} name='important-devices' size={26} />}
          renderSelectedIcon={() => <Icon color={colors.primary} name='important-devices' size={26} />}
          onPress={() => this.changeTab('about')}>
          <ProfileNavContainer hideTabBar={this._hideTabBar.bind(this)} />
        </TabNavigator.Item>
        {/* <TabNavigator.Item
          tabStyle={selectedTab !== 'contact' && { marginBottom: -6 }}
          titleStyle={[styles.titleStyle, {marginTop: -1}]}
          selectedTitleStyle={[styles.titleSelected, {marginTop: -3, marginBottom: 7}]}
          selected={selectedTab === 'contact'}
          title={selectedTab === 'contact' ? 'CONTACT' : null}
          renderIcon={() => <Icon style={{paddingBottom: 4}} color={colors.grey2} name='contacts' size={26} />}
          renderSelectedIcon={() => <Icon color={colors.primary} name='contacts' size={26} />}
          onPress={() => this.changeTab('contact')}>
          <HomeNavContainer />
        </TabNavigator.Item>
        <TabNavigator.Item
          tabStyle={selectedTab !== 'pricing' && { marginBottom: -6 }}
          titleStyle={[styles.titleStyle, {marginTop: -1}]}
          selectedTitleStyle={[styles.titleSelected, {marginTop: -3, marginBottom: 7}]}
          selected={selectedTab === 'pricing'}
          title={selectedTab === 'pricing' ? 'PRICING' : null}
          renderIcon={() => <Icon style={{paddingBottom: 4}} color={colors.grey2} name='attach-money' size={26} />}
          renderSelectedIcon={() => <Icon color={colors.primary} name='attach-money' size={26} />}
          onPress={() => this.changeTab('pricing')}>
          <HomeNavContainer />
        </TabNavigator.Item>
        <TabNavigator.Item
          tabStyle={selectedTab !== 'more' && { marginBottom: -6 }}
          titleStyle={[styles.titleStyle, {marginTop: -1}]}
          selectedTitleStyle={[styles.titleSelected, {marginTop: -3, marginBottom: 8}]}
          selected={selectedTab === 'more'}
          title={selectedTab === 'more' ? 'MORE' : null}
          renderIcon={() => <Icon style={{paddingBottom: 4}} color={colors.grey2} name='list' size={26} />}
          renderSelectedIcon={() => <Icon color={colors.primary} name='list' size={26} />}
          onPress={() => this.changeTab('more')}>
          <HomeNavContainer />
        </TabNavigator.Item> */}
      </TabNavigator>
    )
  }
}

styles = StyleSheet.create({
  titleStyle: {
    ...Platform.select({
      ios: {
        // fontFamily: 'sans-serif'
      }
    })
  }
})

export default TabContainer
