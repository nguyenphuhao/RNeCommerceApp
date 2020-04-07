import * as React from 'react';

import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';

import ProductStack from './ProductStack';
import AuthenticationStack from './AuthenticationStack';
import * as NavigationOptions from './NavigationOptions';
import { AppHeader } from '../components/header';

const Stack = createStackNavigator();
export const Navigation = () => {
  const { ScreenName } = NavigationOptions;
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName={ScreenName.AuthenticationStack}
      >
        <Stack.Screen
          name={ScreenName.AuthenticationStack}
          component={AuthenticationStack}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name={ScreenName.ProductStack}
          component={ProductStack}
          options={{headerShown: false}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export const Options = { ...NavigationOptions };