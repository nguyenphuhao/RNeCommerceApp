import React from 'react';
import { View } from 'react-native';
import { Header, Icon } from 'react-native-elements';
import styles from './styles';
import ProductDetail from '../../components/product/productDetail';
import { useNavigation } from '@react-navigation/native';

const product = {
  id: 0,
  productName: 'Product with stock location',
  price: '$31.00',
  discount: {
    oldPrice: '$34.00',
    description: '9% Off',
  },
  img:
    'http://34.73.95.65/image/thumbnails/18/6a/demo_product07_jpg-100012-250x250.jpg',
  colors: ['BLUE', 'PINK', 'BLACK', 'WHITE'],
  description: `This natural coverage concealer lets you instantly eliminate tell-tale signs of stress and fatigue. Provides complete, natural-looking coverage, evens skin tone, covers dark circles and minimizes fine lines around the eyes. The Result: A soft, matte finish. 

This natural coverage concealer lets you instantly eliminate tell-tale signs of stress and fatigue. Provides complete, natural-looking coverage, evens skin tone, covers dark circles and minimizes fine lines around the eyes. The Result: A soft, matte finish`,
};
const ProductDetailScreen = ({ route, navigation }) => {
  const renderRightComponent = () => {
    return (
      <View style={styles.headerRight}>
        <Icon name="search" type="font-awesome" color="#fff" />
        <Icon name="shopping-cart" type="font-awesome" color="#fff" />
      </View>
    );
  };
  return (
    <>
      <Header
        containerStyle={styles.header}
        leftComponent={{ icon: 'menu', ...styles.headerLeft }}
        centerComponent={{
          text: '',
          style: styles.headerTitle,
        }}
        rightComponent={renderRightComponent()}
      />
      {/* <SearchBar
        containerStyle={styles.search}
        inputContainerStyle={styles.searchInput}
        placeholder="Search for products"
        onChangeText={() => {}}
        value={''}
      /> */}
      <ProductDetail product={route.params.product} />
    </>
  );
};

export default ProductDetailScreen;
