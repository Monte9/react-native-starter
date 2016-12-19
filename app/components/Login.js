import React, { Component } from 'react'
import { View } from 'react-native'
import { connect } from 'react-redux'
import { push_feed, pop_feed, restart_feed } from '../actions/navigation'

import Storage from '../api/Storage'
import LoginView from './LoginView'

const startAuthentication = () => async (dispatch, getState) => {
  // Try and retrieve token from Storage
  const token = await getToken()
  if (token) {
    // succesfully retrieved it
    return (dispatch(authenticationSuccess(token)))
  } else {
    console.log("TOKEN IS NOT FOUND")
  }
}

const submitLogin = (email, password) => async (dispatch, getState) => {
  return (dispatch(loginUser(email, password)))
}

const loginUser = (email, password) => async (dispatch, getState) => {
  dispatch({type: AUTHENTICATION_PENDING})
  new APIClient().loginAPICall(email, password)
    .then((result) => {
      console.log(result)
      if (result.success) {
        dispatch(authenticationSuccess(result.token))
        dispatch(saveUser(result.user))
      } else {
        dispatch(authenticationFailure(result.message))
      }
    })
    .catch((error) => {
      dispatch(authenticationFailure(result.message))
    })
}

const fetchUserDetails = (email) => async (dispatch, getState) => {
  new APIClient().fetchUserDetailsAPI(email)
    .then((result) => {
      console.log(result)
      if (result.success) {
        dispatch(saveUser(result.user))
      } else {
        dispatch(fetchUserDetailsFailure(result.message))
      }
    })
    .catch((error) => {
      dispatch(fetchUserDetailsFailure(result.message))
    })
}

class Login extends Component {
  componentDidMount() {
    //startAuthentication()
    this.props.hideTabBar(true)
    this.props.disableGestures(true)
  }

  // componentWillReceiveProps(nextProps) {
  //   this.props.hideTabBar(true)
  //   this.props.disableGestures(true)
  // }

  submitLogin(email, password) {
    this.props.dispatch(restart_feed({ key: 'Feed', type: 'home' }))
    // this.props.dispatch(pop())
    // const { dispatch } = this.props
    // dispatch(userActionCreators.submitLogin(email, password))
  }

  displaySignupView() {
    this.props.dispatch(push_feed({ key: 'Signup', type: 'signup' }))
  }

  componentDidUpdate() {
    // the token must have been asynchronously loaded if available
    // if (this.props.token) {
    //   console.log("Login Success!!")
    //   Actions.pop()
    // }
  }

  render() {
    return (
      <LoginView onPress={this.submitLogin.bind(this)} onSignupPress={this.displaySignupView.bind(this)}/>
    )
  }
}

// const mapStateToProps = (state) => ({
//   isAuthenticating: state.user.isAuthenticating,
//   token: state.user.token
// })

export default connect(
  // mapStateToProps,
)(Login)
