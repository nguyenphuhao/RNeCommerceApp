import {
  GET_CATEGORIES,
  GET_PRODUCTS_BY_CATEGORY
} from '../constants';

export const getCategories = (categories) => {
  return {
    type: GET_CATEGORIES,
    payload: {
      categories
    }
  }
}

export const getProductsByCategories = (products) => {
  return {
    type: GET_PRODUCTS_BY_CATEGORY,
    payload: {
      products
    }
  }
}

export default {
  getCategories,
  getProductsByCategories,
}