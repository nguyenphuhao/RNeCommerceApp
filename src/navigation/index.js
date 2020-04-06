import * as React from 'react';

import { NavigationConstants } from '../constants';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';

import ProductStack from './ProductStack';
import AuthenticationStack from './AuthenticationStack';

const Stack = createStackNavigator();
export const Navigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName={NavigationConstants.AuthenticationStack}
      >
        <Stack.Screen
          name={NavigationConstants.AuthenticationStack}
          component={AuthenticationStack}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name={NavigationConstants.ProductStack}
          component={ProductStack}
          options={{
            headerShown: false,
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
