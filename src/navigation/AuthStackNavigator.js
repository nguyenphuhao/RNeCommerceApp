import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { ScreenName } from '../constants';
import { RegistrationScreen, LoginScreen } from '../screens';
import { RegistrationHeaderBar } from '../components';

const Stack = createStackNavigator();
const AuthStackNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name={ScreenName.Login}
        component={LoginScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name={ScreenName.Registration}
        component={RegistrationScreen}
        options={{
          headerTransparent: true,
          header: () => <RegistrationHeaderBar />
        }}
      />
    </Stack.Navigator>
  );
};

export default AuthStackNavigator;
