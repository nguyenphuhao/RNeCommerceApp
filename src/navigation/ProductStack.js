import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import NavigationConstants from './constants';

import ProductDetailScreen from '../screens/product/ProductDetailScreen';
import MainScreen from '../screens/main/MainScreen';

const { ProductList, ProductDetail } = NavigationConstants;
const Stack = createStackNavigator();
const ProductStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name={ProductList} component={MainScreen} />
      <Stack.Screen name={ProductDetail} component={ProductDetailScreen} />
    </Stack.Navigator>
  );
};

export default ProductStack;
