import {
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGIN_FAILED,
  HAS_AUTHORIZED
} from '../constants';

export const login = (user) => {
  return {
    type: LOGIN_REQUEST,
    user,
  }
}

export const loginSuccess = (user) => {
  return {
    type: LOGIN_SUCCESS,
  }
}

export const loginFailed = (user) => {
  return {
    type: LOGIN_FAILED,
    errorMsg,
  }
}

export const hasAuthorized = (token) => {
  return {
    type: HAS_AUTHORIZED,
    token,
  }
}

export default {
  login,
  loginSuccess,
  loginFailed,
  hasAuthorized
}