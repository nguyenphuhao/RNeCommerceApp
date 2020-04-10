import { sendRequest } from '../common';
import { unexpected_error } from '../../constants';

const defaultRows = 5;
const defaultPage = 1;

export const getCategories = () => {
  const url = global.API.catalog.categories + '&category_id';
  return sendRequest(url)
    .then(res => {
      if (!res.ok) {
        throw new Error(unexpected_error);
      }
      return res.json();
    })
};

export const getProductByCategory = ({categoryId, rows = defaultRows, page = defaultPage}) => {
  const url = `${global.API.catalog.productlist}&category_id=${categoryId}&rows=${rows}&page=${page}`;
  console.log(url);
  return sendRequest(url)
    .then(res => {
      if (!res.ok) {
        throw new Error(unexpected_error);
      }
      return res.json();
    });
};

export default {
  getCategories,
  getProductByCategory
}