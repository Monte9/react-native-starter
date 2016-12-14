import React, { Component, PropTypes } from 'react'
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

// const mapStateToProps = (state) => ({
//   isAuthenticating: state.user.isAuthenticating,
//   token: state.user.token,
//   error: state.user.error,
// })

class LoginView extends Component {
  state = {
    email: '',
    password: '',
    isAuthenticating: false,
    error: ''
  }

  onPressForgotPassword() {
    console.log("forgot password")
  }

  onPressSignUp() {
    console.log("sign up pressed")
  }

  render() {
    return (
      <View style={styles.container}>
        <Image style={styles.bg} source={require('../images/login_bg.png')} />
        <View style={styles.header}>
          <View style={styles.headerIconView}>
            <Image style={styles.mark} source={require('../images/logo_transparent.png')} />
          </View>
          <View style={styles.headerTitleView}>
            <Text style={styles.appTitle}>React Native </Text>
            <Text style={styles.appTitleExtra}>Starter</Text>
          </View>
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
              placeholder="Email"
              placeholderTextColor="#FFF"
              underlineColorAndroid='transparent'
              onChangeText={(email) => this.setState({email})}
              value={this.state.email}/>
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
          <View style={styles.signinView}>
            <TouchableOpacity
              style={styles.signin}
              onPress={this.props.onPress.bind(this, this.state.email, this.state.password)}>
              <Text style={styles.signinText}>Sign In</Text>
            </TouchableOpacity>
          </View>
          <TouchableOpacity
            style={styles.forgotContainer}
            onPress={this.onPressForgotPassword}>
            <Text style={styles.forgotText}>Forgot Password</Text>
          </TouchableOpacity>
        </View>
        <TouchableOpacity
          style={styles.signup}
          onPress={this.onPressSignUp}>
          <Text style={styles.greyFont}>Dont have an account?<Text style={styles.whiteFont}> Sign Up</Text></Text>
        </TouchableOpacity>
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
  header: {
      justifyContent: 'center',
      alignItems: 'center',
      flex: .4,
      backgroundColor: 'transparent'
  },
  headerIconView: {
    width: 150,
    height: 180
  },
  mark: {
    resizeMode: 'contain',
    width: 150,
    height: 180
  },
  headerTitleView: {
    flexDirection: 'row',
  },
  appTitle: {
    color: 'rgba(120, 216, 194, 1)',
    paddingTop: 10,
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
    fontSize: 32,
  },
  appTitleExtra: {
    color: 'rgba(240, 145, 136, 1)',
    paddingTop: 10,
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
    fontSize: 32,
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
  signinView: {
    paddingTop: 20,
    paddingBottom: 10,
  },
  signin: {
      backgroundColor: '#FF3366',
      height: 50,
      width: Dimensions.get('window').width,
      alignItems: 'center',
      justifyContent: 'center',
  },
  signinText: {
    color: '#FFF',
  },
  signup: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 0.1
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
    paddingTop:20,
    paddingRight: 20,
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

export default connect()(LoginView)
