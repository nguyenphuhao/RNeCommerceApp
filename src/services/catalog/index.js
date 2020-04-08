import { sendRequest } from '../common';
import { unexpected_error } from '../../constants';

export const getCategories = () => {
  const url = global.API.catalog.categories + '&category_id';
  console.log(url);
  return sendRequest(url)
    .then(res => {
      if (!res.ok) {
        throw new Error(unexpected_error);
      }
      return res.json();
    })
};

export default {
  getCategories,
}