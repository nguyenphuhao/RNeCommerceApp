export const GET_CATEGORIES = 'GET_CATEGORIES';

export const getCategories = (categories) => {
  return {
    type: GET_CATEGORIES,
    payload: {
      categories
    }
  }
}

export default {
  getCategories,
  GET_CATEGORIES
}