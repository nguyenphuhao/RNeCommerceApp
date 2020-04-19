import { all,takeEvery } from 'redux-saga/effects';
import { LOGIN_FLOW } from '../constants';
import watchUserSagas, { loginFlow } from './userSagas';
export default rootSagas = function* () {
  yield all([
    watchUserSagas()
  ]);
}