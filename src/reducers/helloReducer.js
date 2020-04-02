import { SAY_HELLO } from '../actions/HelloAction';

export const helloReducer = (state = {}, action) => {
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
