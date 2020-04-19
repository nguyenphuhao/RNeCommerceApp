import { useState, useEffect } from 'react';
import { CatalogAPI } from '../services';

const useGetProductByCategory = ({ categoryId , rows = 5, page = 1 }) => {
  const [state, setState] = useState({isFetching: true});
  useEffect(() => {
    fetchProduct({ categoryId, rows, page });
  }, []);

  const fetchProduct = ({ categoryId, rows = 5, page = 1 }) => {
    CatalogAPI.getProductByCategory({ categoryId, rows, page }).then(result => {
      setState({
        products: result.rows,
        records: result.records,
        rows: result.limit,
        page: page,
        isFetching: false,
      });
    }).catch(() => {
      setState({
        products: [],
        records: result.records,
        rows: result.limit,
        page: page,
        isFetching: false,
      });
    });
  }

  const fetchMoreProduct = () => {
    try {
      const { page, rows, records } = state;
      if ((Number(page) * Number(rows)) <= Number(records)) {
        const nextPage = page + 1;
        CatalogAPI.getProductByCategory({ categoryId, rows, page: nextPage}).then(result => {
          setState(prevState => ({
            products: prevState.products.concat(result.rows),
            records: result.records,
            rows: result.limit,
            page: nextPage,
          }));
        }).catch(() => {
          setState({
            products: [],
            records: result.records,
            rows: result.limit,
            page: page,
          });
        });
      }
    } catch (error) {
      // NOTHING
      console.log(error);
    }
  }

  return [
    state,
    fetchProduct,
    fetchMoreProduct
  ]
}

export default useGetProductByCategory;