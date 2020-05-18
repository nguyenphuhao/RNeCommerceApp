import {
  GET_CATEGORIES, 
  GET_PRODUCTS_BY_CATEGORY 
} from '../constants';
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
    case GET_PRODUCTS_BY_CATEGORY:
      return {
        ...state,
        products: action.payload.products,
      }
    default:
      return state;
  }
}