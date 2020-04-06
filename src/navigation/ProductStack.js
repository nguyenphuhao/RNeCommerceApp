import * as React from 'react';
import { Platform } from 'react-native';
import { Icon } from 'react-native-elements';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationConstants } from '../constants';

import ProductDetailScreen from '../screens/product/ProductDetailScreen';
import MainScreen from '../screens/main/MainScreen';

const Stack = createStackNavigator();
const ProductStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerTitle: 'Home',
        headerLeft: Platform.select({
          ios: null,
          android: <Icon name="md-menu" type="ionicon" />,
        }),
      }}
    >
      <Stack.Screen
        name={NavigationConstants.ProductList}
        component={MainScreen}
      />
      <Stack.Screen
        name={NavigationConstants.ProductDetail}
        component={ProductDetailScreen}
      />
    </Stack.Navigator>
  );
};

export default ProductStack;
