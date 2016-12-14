import { setToken, clearToken } from '../api/Storage'

export const AUTHENTICATION_PENDING = 'AUTHENTICATION_PENDING'
export const AUTHENTICATION_SUCCESS = 'AUTHENTICATION_SUCCESS'
export const AUTHENTICATION_FAILURE = 'AUTHENTICATION_FAILURE'
export const FETCH_USER_DETAILS_FAILURE = 'FETCH_USER_DETAILS_FAILURE'
export const SAVE_USER = 'SAVE_USER'
export const LOGOUT_USER = 'LOGOUT_USER'

const authenticationSuccess = (token) => {
  setToken(token)
  return {
    type: AUTHENTICATION_SUCCESS,
    token
  }
}

const saveUser = (user) => {
  return {
    type: SAVE_USER,
    user
  }
}

const logoutUser = () => {
  clearToken()
  return {
    type: LOGOUT_USER,
  }
}

const authenticationFailure = (error) => {
  return {
    type: AUTHENTICATION_FAILURE,
    error: error
  }
}

const fetchUserDetailsFailure = (error) => {
  return {
    type: FETCH_USER_DETAILS_FAILURE,
    error: error
  }
}
