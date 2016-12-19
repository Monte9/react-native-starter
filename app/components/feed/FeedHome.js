import React, { Component } from 'react'
import { View, Image, ScrollView } from 'react-native'
import { connect } from 'react-redux'

import { Card, Text, Button } from 'react-native-elements'
import Icon from 'react-native-vector-icons/MaterialIcons'

import colors from '../../colors'
import posts from '../../sample_posts'

import { push_feed } from '../../actions/navigation'
import { save_explore_index } from '../../actions/feed'

class FeedHome extends Component {
  componentDidMount() {
    if(true) {
      // this.props.hideTabBar()
      // this.props.dispatch(push({ key: 'Login', type: 'login' }))
    }
    this.props.hideTabBar(false)
    this.props.disableGestures(false)

    // <Text onPress={() => this.props.dispatch(push_feed({ key: 'About' }))}>Go To About</Text>
    // <Text onPress={() => this.props.dispatch(push_feed({ key: 'About', type: 'modal' }))}>Go To About With Modal</Text>
  }

  showExploreView(index) {
    this.props.dispatch(save_explore_index(index))
    this.props.dispatch(push_feed({ key: 'Explore' }))
  }

  render() {
    return (
      <ScrollView style={{backgroundColor: 'white'}}>
        <View style={styles.container}>
          {
            posts.map((post, index) => {
              return (
                <Card
                  title={post.title}
                  image={{uri: post.post_uri}}
                  containerStyle={{backgroundColor: colors.grey4}}
                  key={index}>
                  <Text style={{marginBottom: 10}}>
                    {post.post_text}
                  </Text>
                  <Button
                    icon={{name: 'eye', type: 'font-awesome', color:'white'}}
                    backgroundColor={colors.secondary}
                    buttonStyle={{borderRadius: 0, marginLeft: 0, marginRight: 0, marginBottom: 0}}
                    title='Explore'
                    onPress={this.showExploreView.bind(this, index)}/>
                </Card>
              )
            })
          }
        </View>
      </ScrollView>
    )
  }
}


const styles = {
  container: {
    flex: 1,
  },
  user: {
    flexDirection: 'row',
    marginBottom: 6
  },
  image: {
    width: 30,
    height: 30,
    marginRight: 10
  },
  name: {
    fontSize: 16,
    marginTop: 5
  },
}

export default connect()(FeedHome)
