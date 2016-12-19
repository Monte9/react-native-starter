import React, { Component } from 'react'
import { StyleSheet, Platform } from 'react-native'

import TabNavigator from 'react-native-tab-navigator';
import Icon from 'react-native-vector-icons/MaterialIcons'

import FeedNavContainer from './tabs/FeedNavContainer'
import PortfolioNavContainer from './tabs/PortfolioNavContainer'
import ProfileNavContainer from './tabs/ProfileNavContainer'

import colors from '../colors'

class TabContainer extends Component {
  constructor () {
    super()
    this.state = {
      selectedTab: 'feed',
      hideTabBar: false,
    }
    this.changeTab = this.changeTab.bind(this)
  }

  changeTab (selectedTab) {
    this.setState({
      selectedTab
    })
  }

  _hideTabBar(value) {
    this.setState({
      hideTabBar: value
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
          selectedTitleStyle={{marginTop: -3, marginBottom: 7, color: colors.primary2}}
          selected={selectedTab === 'feed'}
          title={selectedTab === 'feed' ? 'FEED' : null}
          renderIcon={() => <Icon color={colors.grey2} name='list' size={26} />}
          renderSelectedIcon={() => <Icon color={colors.primary2} name='list' size={26} />}
          onPress={() => this.changeTab('feed')}>
          <FeedNavContainer hideTabBar={this._hideTabBar.bind(this)} disableGestures={this.props.disableGestures} />
        </TabNavigator.Item>
        <TabNavigator.Item
          tabStyle={selectedTab !== 'portfolio' && { marginBottom: -6 }}
          titleStyle={[styles.titleStyle, {marginTop: -1}]}
          selectedTitleStyle={{marginTop: -3, marginBottom: 7, color: colors.primary2}}
          selected={selectedTab === 'portfolio'}
          title={selectedTab === 'portfolio' ? 'PORTFOLIO' : null}
          renderIcon={() => <Icon style={{paddingBottom: 4}} color={colors.grey2} name='attach-money' size={26} />}
          renderSelectedIcon={() => <Icon color={colors.primary2} name='attach-money' size={26} />}
          onPress={() => this.changeTab('portfolio')}>
          <PortfolioNavContainer hideTabBar={this._hideTabBar.bind(this)} />
        </TabNavigator.Item>
        <TabNavigator.Item
          tabStyle={selectedTab !== 'profile' && { marginBottom: -6 }}
          titleStyle={[styles.titleStyle, {marginTop: -1}]}
          selectedTitleStyle={{marginTop: -3, marginBottom: 7, color: colors.primary2}}
          selected={selectedTab === 'profile'}
          title={selectedTab === 'profile' ? 'PROFILE' : null}
          renderIcon={() => <Icon style={{paddingBottom: 4}} color={colors.grey2} name='contacts' size={26} />}
          renderSelectedIcon={() => <Icon color={colors.primary2} name='contacts' size={26} />}
          onPress={() => this.changeTab('profile')}>
          <ProfileNavContainer hideTabBar={this._hideTabBar.bind(this)} changeTab={this.changeTab.bind(this)}/>
        </TabNavigator.Item>
      </TabNavigator>
    )
  }
}

export default TabContainer
