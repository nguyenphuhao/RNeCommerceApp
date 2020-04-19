
import {
  token,
  LOGIN_REQUEST,
  HAS_AUTHORIZED,
  LOGIN_SUCCESS,
  LOGIN_FAILED
} from '../constants';
import { takeLatest, all, put } from 'redux-saga/effects';
import { AuthAPI } from '../services';
import AsyncStorage from '@react-native-community/async-storage';

export const signIn = function* (user) {
  try {
    const authToken = yield call(AuthAPI.login, user);
    yield call(AsyncStorage.setItem, token, authToken);
    yield put({ type: LOGIN_SUCCESS, token: authToken });
  } catch (error) {
    yield put({ type: LOGIN_FAILED, errorMsg: error.errorMsg });
  }
}

const watchUserSagas = function* () {
  yield all([
    takeLatest(LOGIN_REQUEST, signIn),
  ])
}

export default watchUserSagas;