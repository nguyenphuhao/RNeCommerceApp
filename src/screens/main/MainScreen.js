import React from 'react';
import { SearchBar } from 'react-native-elements';
import { AppHeader } from '../../components/header';
import styles from './styles';
import CategoryList from '../../components/category/CategoryList';
import ProductList from '../../components/product/ProductList';

const cateList = [
  {
    id: 0,
    name: 'Makeup',
    img:
      'http://34.73.95.65/image/thumbnails/18/71/demo_product_04_jpg-100124-120x120.jpg',
    products: [
      {
        id: 0,
        productName: 'Waterproof Protective Undereye Concealer',
        price: '$29.50',
        discount: null,
        img:
          'http://34.73.95.65/image/thumbnails/18/70/demo_product05_jpg-100101-250x250.jpg',
        description: `This natural coverage concealer lets you instantly eliminate tell-tale signs of stress and fatigue. Provides complete, natural-looking coverage, evens skin tone, covers dark circles and minimizes fine lines around the eyes. The Result: A soft, matte finish. 

          This natural coverage concealer lets you instantly eliminate tell-tale signs of stress and fatigue. Provides complete, natural-looking coverage, evens skin tone, covers dark circles and minimizes fine lines around the eyes. The Result: A soft, matte finish`,
      },
      {
        id: 1,
        productName: 'Product with stock locationsh',
        price: '$31.00',
        discount: {
          oldPrice: '$34.00',
          description: '9% Off',
        },
        img:
          'http://34.73.95.65/image/thumbnails/18/6a/demo_product07_jpg-100012-250x250.jpg',
        description: `This natural coverage concealer lets you instantly eliminate tell-tale signs of stress and fatigue. Provides complete, natural-looking coverage, evens skin tone, covers dark circles and minimizes fine lines around the eyes. The Result: A soft, matte finish. 

This natural coverage concealer lets you instantly eliminate tell-tale signs of stress and fatigue. Provides complete, natural-looking coverage, evens skin tone, covers dark circles and minimizes fine lines around the eyes. The Result: A soft, matte finish`,
      },
      {
        id: 2,
        productName: 'Product with stock locationsh',
        price: '$31.00',
        discount: {
          oldPrice: '$34.00',
          description: '9% Off',
        },
        img:
          'http://34.73.95.65/image/thumbnails/18/6a/demo_product07_jpg-100012-250x250.jpg',
        description: `This natural coverage concealer lets you instantly eliminate tell-tale signs of stress and fatigue. Provides complete, natural-looking coverage, evens skin tone, covers dark circles and minimizes fine lines around the eyes. The Result: A soft, matte finish. 

This natural coverage concealer lets you instantly eliminate tell-tale signs of stress and fatigue. Provides complete, natural-looking coverage, evens skin tone, covers dark circles and minimizes fine lines around the eyes. The Result: A soft, matte finish`,
      },
    ],
  },
  {
    id: 1,
    name: 'Clothes',
    img:
      'http://34.73.95.65/image/thumbnails/18/79/t_shirt_3a_jpg-100244-120x120.jpg',
    products: [
      {
        id: 2,
        productName: 'Fruit of the Loom T-Shirts 5 Pack - Super Premium',
        price: '$9.99',
        discount: null,
        img:
          'http://34.73.95.65/image/thumbnails/18/79/t_shirt_jpg-100241-250x250.jpg',
      },
      {
        id: 3,
        productName: 'Product with options and stock locations',
        price: '$21.00',
        discount: null,
        img:
          'http://34.73.95.65/image/thumbnails/18/79/t_shirt_4_jpg-100248-250x250.jpg',
      },
    ],
  },
  {
    id: 2,
    name: 'Funitures',
    img:
      'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/amazon-rivet-furniture-1533048038.jpg',
    products: [],
  },
  {
    id: 3,
    name: 'Books',
    img:
      'http://34.73.95.65/image/thumbnails/18/76/book2_png-100200-120x120.png',
    products: [],
  },
  {
    id: 4,
    name: 'Fragrance',
    img:
      'http://34.73.95.65/image/thumbnails/18/71/demo_product_14_2_jpg-100126-120x120.jpg',
    products: [],
  },
];

const MainScreen = () => {
  return (
    <>
      <SearchBar
        containerStyle={styles.search}
        inputContainerStyle={styles.searchInput}
        placeholder="Search for products"
        onChangeText={() => {}}
        value={''}
      />
      <CategoryList data={cateList} />
      <ProductList data={cateList} />
    </>
  );
};

export default MainScreen;
