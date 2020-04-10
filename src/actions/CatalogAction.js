export const GET_CATEGORIES = 'GET_CATEGORIES';
export const GET_PRODUCTS_BY_CATEGORY = 'GET_PRODUCTS_BY_CATEGORY';

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
  GET_CATEGORIES,
  GET_PRODUCTS_BY_CATEGORY
}