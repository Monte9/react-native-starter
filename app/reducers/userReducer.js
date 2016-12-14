import { getToken } from '../api/Storage'
import APIClient from '../api/APIClient'

import {
  AUTHENTICATION_PENDING,
  AUTHENTICATION_SUCCESS,
  AUTHENTICATION_FAILURE,
  FETCH_USER_DETAILS_FAILURE,
  SAVE_USER,
  LOGOUT_USER
} from '../actions/user'

import authenticationPending from './user/authentication_pending'
import authenticationSuccess from './user/authentication_success'
import authenticationFailure from './user/authentication_failure'
import fetchUserDetailsFailure from './user/fetch_user_details_failure'
import saveUser from './user/save_user'
import logoutUser from './user/logout_user'

const initialState = {
  isAuthenticating: false,
  token: null,
  error: null,
  user: ""
}

export default function( state = initialState, action ) {
  switch( action.type ) {
    case AUTHENTICATION_PENDING:
      return authenticationPending( state, action )
    case AUTHENTICATION_SUCCESS:
      return authenticationSuccess( state, action )
    case AUTHENTICATION_FAILURE:
      return authenticationFailure( state, action )
    case FETCH_USER_DETAILS_FAILURE:
      return fetchUserDetailsFailure( state, action )
    case SAVE_USER:
      return saveUser( state, action )
    case LOGOUT_USER:
      return logoutUser( state, action )
    default:
      return state
  }
}
