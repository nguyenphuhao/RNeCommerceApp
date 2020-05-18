import React from 'react';
import ProductItemHorizontal from './productItemHorizontal';
import ProductItemVertical from './productItemVertical';


const ProductItem = (props) => {
  const horizontal = props.horizontal;
  return (
    <>
      {horizontal ? <ProductItemHorizontal {...props} /> : <ProductItemVertical {...props} />}
    </>
  )
}
export default ProductItem;