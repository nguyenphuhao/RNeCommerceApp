import React, { useContext } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import AuthStackNavigator from './AuthStackNavigator';
import AppDrawerNavigator from './AppDrawerNavigator';
import { AuthContext } from '../contexts';

const AppNavigation = () => {
  const { userToken } = useContext(AuthContext);
  return (
    <NavigationContainer>
      {userToken === null ? <AuthStackNavigator /> : <AppDrawerNavigator />}
    </NavigationContainer>
  );
};

export default AppNavigation;