import {
  LOGIN_REQUEST,
  HAS_AUTHORIZED,
  LOGIN_SUCCESS,
  LOGIN_FAILED,
  HAS_AUTHORIZED_DONE
} from '../constants';
const initialState = {
  user: null,
  errorMsg: '',
  token: '',
  status: 0
}
export const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_REQUEST:
      return {
        ...state,
        user: action.user,
      };
    case LOGIN_SUCCESS:
      return {
        ...state,
        token: action.token,
      };
    case LOGIN_FAILED:
      return {
        ...state,
        token: null,
        errorMsg: action.errorMsg,
      };
    case HAS_AUTHORIZED:
      return {
        ...state,
        token: action.token,
      };
    case HAS_AUTHORIZED_DONE:
      return {
        ...state,
        status: action.status,
      };
    default:
      return state;
  }
};
