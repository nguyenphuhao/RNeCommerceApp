import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { ScreenName } from '../constants';
import MainStackNavigator from './MainStackNavigator';
import { DrawerMenu } from '../components';

const Drawer = createDrawerNavigator();

const AppDrawerNavigator = () => {
  return (
    <Drawer.Navigator drawerContent={props => <DrawerMenu {...props} />}>
      <Drawer.Screen
        name={ScreenName.Home}
        component={MainStackNavigator}
      />
    </Drawer.Navigator>
  );
};

export default AppDrawerNavigator;