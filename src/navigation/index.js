import * as React from 'react';

import NavigationConstants from './constants';
import { NavigationContainer } from '@react-navigation/native';

import ProductStack from './ProductStack';
import AuthenticationStack from './AuthenticationStack';

const Navigation = () => {
  return (
    <NavigationContainer>
      <AuthenticationStack />
      <ProductStack />
    </NavigationContainer>
  );
};

export default {
  NavigationConstants,
  Navigation,
};
