import { GET_CATEGORIES } from '../actions/CatalogAction';
const initialState = {
  categories: [],
}
export const catalogReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_CATEGORIES:
      return {
        ...state,
        categories: action.payload.categories,
      }
    default:
      return state;
  }
}