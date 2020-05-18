import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { ScreenName } from '../constants';
import { 
  ProfileScreen,
  WishListScreen,
  CartScreen,
  OrderScreen,
  EmailScreen,
  CallScreen,
  ShareScreen,
  MainScreen,
  ProductDetailScreen,
  ProductListScreen
} from '../screens';
import { AppHeaderBar } from '../components';

const Stack = createStackNavigator();

const MainStackNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        header: () => <AppHeaderBar />,
      }}
      initialRouteName={ScreenName.Main}
    >
      <Stack.Screen
        name={ScreenName.Main}
        component={MainScreen}
      />
      <Stack.Screen
        name={ScreenName.ProductDetail}
        component={ProductDetailScreen}
      />
      <Stack.Screen
        name={ScreenName.ProductList}
        component={ProductListScreen}
      />
      <Stack.Screen
        name={ScreenName.Profile}
        component={ProfileScreen}
      />
      <Stack.Screen
        name={ScreenName.WishList}
        component={WishListScreen}
      />
      <Stack.Screen
        name={ScreenName.Cart}
        component={CartScreen}
      />
      <Stack.Screen
        name={ScreenName.Orders}
        component={OrderScreen}
      />
      <Stack.Screen
        name={ScreenName.Email}
        component={EmailScreen}
      />
      <Stack.Screen
        name={ScreenName.Call}
        component={CallScreen}
      />
      <Stack.Screen
        name={ScreenName.Share}
        component={ShareScreen}
      />
    </Stack.Navigator>
  );
};

export default MainStackNavigator;
