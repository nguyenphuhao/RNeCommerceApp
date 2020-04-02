import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import NavigationConstants from './constants';

import LoginScreen from '../screens/login/LoginScreen';
import RegistrationScreen from '../screens/registration/RegistrationScreen';

const { Login, Registration } = NavigationConstants;
const Stack = createStackNavigator();
const AuthenticationStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name={Login} component={LoginScreen} />
      <Stack.Screen name={Registration} component={RegistrationScreen} />
    </Stack.Navigator>
  );
};

export default AuthenticationStack;
