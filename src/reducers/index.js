import { combineReducers } from 'redux';
import { authReducer } from './authReducer';
import { catalogReducer } from './catalogReducer';

export default combineReducers({
  authReducer,
  catalogReducer
});
