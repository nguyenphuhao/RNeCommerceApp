import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import * as NavigationOptions from './NavigationOptions';
import ProductDetailScreen from '../screens/product/ProductDetailScreen';
import MainScreen from '../screens/main/MainScreen';
import { AppHeader } from '../components/header';

const Stack = createStackNavigator();
const ProductStack = () => {
  const { ScreenName } = NavigationOptions;
  return (
    <Stack.Navigator
      screenOptions={{
        header: () => <AppHeader />
      }}
      initialRouteName={ScreenName.ProductList}>
      <Stack.Screen
        name={ScreenName.ProductList}
        component={MainScreen}
      />
      <Stack.Screen
        name={ScreenName.ProductDetail}
        component={ProductDetailScreen}
      />
    </Stack.Navigator>
  );
};

export default ProductStack;
