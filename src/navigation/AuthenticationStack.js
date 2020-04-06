import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationConstants } from '../constants';

import LoginScreen from '../screens/login/LoginScreen';
import RegistrationScreen from '../screens/registration/RegistrationScreen';

const Stack = createStackNavigator();
const AuthenticationStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name={NavigationConstants.Login}
        component={LoginScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name={NavigationConstants.Registration}
        component={RegistrationScreen}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
};

export default AuthenticationStack;
