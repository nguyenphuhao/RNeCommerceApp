import { SAY_HELLO } from '../actions/HelloAction';

export const userReducer = (state = {}, action) => {
  switch (action.type) {
    case SAY_HELLO:
      return {
        ...state,
        message: action.payload.message,
      };
    default:
      return state;
  }
};
