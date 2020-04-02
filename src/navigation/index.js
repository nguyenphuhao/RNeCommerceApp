import * as React from 'react';

import Constants from './constants';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';

import ProductStack from './ProductStack';
import AuthenticationStack from './AuthenticationStack';

const Stack = createStackNavigator();
export const NavigationConstants = { ...Constants };
export const Navigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name={Constants.AuthenticationStack}
          component={AuthenticationStack}
        />
        <Stack.Screen name={Constants.ProductStack} component={ProductStack} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
