import React, { Component } from 'react'
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  Image,
  Dimensions,
  TouchableOpacity
} from 'react-native'

import Spinner from 'react-native-loading-spinner-overlay';
import { connect } from 'react-redux'

import { push_feed, pop_feed, restart_feed } from '../actions/navigation'

// const mapStateToProps = (state) => ({
//   isAuthenticating: state.user.isAuthenticating,
//   token: state.user.token,
//   error: state.user.error,
// })

class SignupView extends Component {
  state = {
    email: '',
    password: '',
    isAuthenticating: false,
    error: ''
  }

  componentDidMount() {
    //startAuthentication()
  }

  componentDidUpdate() {
    // this.props.hideTabBar(true)
    // this.props.disableGestures(true)
  }

  onPressForgotPassword() {
    console.log("forgot password")
  }

  backToLoginView() {
    this.props.dispatch(pop_feed())
  }

  submitSignup() {
    this.props.dispatch(restart_feed({ key: 'Feed', type: 'home' }))
  }

  render() {
    return (
      <View style={styles.container}>
        <Image style={styles.bg} source={require('../images/login_bg.png')} />
        <View style={styles.headerIconView}>
          <TouchableOpacity style={styles.headerBackButtonView} onPress={this.backToLoginView.bind(this)}>
            <Image style={styles.backButtonIcon} source={require('../images/back.png')} />
          </TouchableOpacity>
        </View>
        <View style={styles.headerTitleView}>
          <Text style={styles.titleViewText}>Sign Up</Text>
        </View>
        <Spinner visible={this.state.isAuthenticating} />
        <View style={styles.inputs}>
          <View>
            <Text style={styles.errorText}>{this.state.error}</Text>
          </View>
          <View style={styles.inputContainer}>
            <View style={styles.imageContainer}>
              <Image style={styles.inputUsername} source={require('../images/login_username_icon.png')}/>
            </View>
            <TextInput
              style={[styles.input, styles.whiteFont]}
              placeholder="Name"
              placeholderTextColor="#FFF"
              underlineColorAndroid='transparent'
              onChangeText={(email) => this.setState({email})}
              value={this.state.email}/>
          </View>
          <View style={styles.inputContainer}>
            <View style={styles.imageContainer}>
              <Image style={styles.inputPassword} source={require('../images/signup_email_icon.png')}/>
            </View>
            <TextInput
              style={[styles.input, styles.whiteFont]}
              placeholder="Email"
              placeholderTextColor="#FFF"
              onChangeText={(password) => this.setState({password})}
              value={this.state.password}/>
          </View>
          <View style={styles.inputContainer}>
            <View style={styles.imageContainer}>
              <Image style={styles.inputPassword} source={require('../images/login_password_icon.png')}/>
            </View>
            <TextInput
              secureTextEntry={true}
              style={[styles.input, styles.whiteFont]}
              placeholder="Password"
              placeholderTextColor="#FFF"
              onChangeText={(password) => this.setState({password})}
              value={this.state.password}/>
          </View>
          <View style={styles.inputContainer}>
            <View style={styles.imageContainer}>
              <Image style={styles.inputUsername} source={require('../images/signup_birthday_icon.png')}/>
            </View>
            <TextInput
              style={[styles.input, styles.whiteFont]}
              placeholder="Birthday"
              placeholderTextColor="#FFF"
              underlineColorAndroid='transparent'
              onChangeText={(email) => this.setState({email})}
              value={this.state.email}/>
          </View>
        </View>
        <View style={styles.footerContainer}>
          <View style={styles.signupView}>
            <TouchableOpacity
              style={styles.signup}
              onPress={this.submitSignup.bind(this)}>
              <Text style={styles.signupText}>Join</Text>
            </TouchableOpacity>
          </View>
          <TouchableOpacity
            style={styles.signin}
            onPress={this.backToLoginView.bind(this)}>
            <Text style={styles.greyFont}>Already have an account?<Text style={styles.whiteFont}> Sign In</Text></Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

let styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    flex: 1,
    backgroundColor: 'transparent'
  },
  bg: {
    position: 'absolute',
    left: 0,
    top: 0,
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height
  },
  headerIconView: {
    flex: .1,
    backgroundColor: 'transparent'
  },
  headerBackButtonView: {
    width: 25,
    height: 25,
    position: 'absolute',
    top: 35,
    left: 15,
  },
  backButtonIcon: {
    resizeMode: 'contain',
    width: 25,
    height: 25
  },
  headerTitleView: {
    flex: 0.07,
    backgroundColor: 'transparent',
    paddingLeft: 25,
  },
  titleViewText: {
    fontSize: 40,
    color: '#fff',
  },
  errorText: {
    color: '#FF3366',
    paddingBottom: 20,
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
    fontSize: 15,
  },
  inputs: {
    paddingTop: 20,
    paddingBottom: 10,
    flex: .40
  },
  footerContainer: {
    flex: 0.15,
    justifyContent: 'center',
    alignItems: 'center',
  },
  signupView: {
    paddingTop: 20,
  },
  signup: {
    backgroundColor: '#FF3366',
    height: 50,
    width: Dimensions.get('window').width,
    alignItems: 'center',
    justifyContent: 'center',
  },
  signupText: {
    color: '#FFF',
  },
  signin: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 0.05
  },
  inputPassword: {
    width: 25,
    height: 25,
  },
  imageContainer: {
    paddingLeft: 20,
    paddingRight: 10,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  inputUsername: {
    width: 25,
    height: 25,
  },
  inputContainer: {
      borderWidth: 1,
      paddingBottom: 10,
      borderBottomColor: '#CCC',
      borderColor: 'transparent',
      flexDirection: 'row'
  },
  input: {
      height: 50,
      flex: 10,
      paddingLeft: 20,
      fontSize: 22,
  },
  forgotContainer: {
    paddingTop:10,
    paddingRight: 10,
  },
  forgotText: {
    fontSize: 13,
    alignSelf: 'flex-end',
    color: '#D8D8D8',
  },
  greyFont: {
    color: '#D8D8D8'
  },
  whiteFont: {
    color: '#FFF'
  }
})

export default connect()(SignupView)
