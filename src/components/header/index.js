import React from 'react';
import { View, Text } from 'react-native';
import { Header, Icon } from "react-native-elements";
import { DrawerActions } from '@react-navigation/native';
import styles from "./styles";
import { TouchableOpacity } from 'react-native-gesture-handler';
import { useRoute, useNavigation } from '@react-navigation/native';
import * as Options from '../../navigation/NavigationOptions';
import unescape from 'lodash/unescape';

export const HeaderMenuButton = () => {
  const navigation = useNavigation();
  const openDrawer = () => {
    navigation.dispatch(DrawerActions.openDrawer());
  }
  return (
    <TouchableOpacity onPress={openDrawer}>
      <Icon
        name='bars'
        type='font-awesome'
        color='#fff'
        size={30} />
    </TouchableOpacity>
  )
}

export const HeaderBackButton = () => {
  const navigation = useNavigation();
  return (
    <TouchableOpacity>
      <Icon
        onPress={() => {navigation.goBack(null)}}
        name='arrow-left'
        type='font-awesome'
        color='#fff'
        size={30} />
    </TouchableOpacity>

  )
}

export const HeaderLeft = () => {
  const navigation = useNavigation();
  const children = navigation.canGoBack() ? <HeaderBackButton /> : <HeaderMenuButton />
  return (
    <View style={styles.headerLeft}>
      {children}
    </View>
  )
}

export const HeaderRight = (props) => {
  const children = props.children || <Icon name='shopping-cart' type='font-awesome' size={30} color='#fff' />
  return (
    <TouchableOpacity style={styles.headerRight}>
      {children}
    </TouchableOpacity>
  )
}

export const HeaderCenter = (props) => {
  const route = useRoute();
  const title = route.params && route.params.title;
  const children = props.children || <Text style={styles.headerTitle}>{title ? unescape(title) : unescape(Options.getScreenOptions(route.name).headerTitle)}</Text>
  return (
    <View>
      {children}
    </View>
  );
}
export const AppHeaderBar = () => {
  return (
    <Header
      statusBarProps={{ translucent: true }}
      containerStyle={styles.header}
    >
      <HeaderLeft />
      <HeaderCenter />
      <HeaderRight />
    </Header>
  );
};

export const RegistrationHeaderBar = () => {
  return (
    <Header
      backgroundColor={'transparent'}
      statusBarProps={{ translucent: true }}
    >
      <HeaderLeft />
    </Header>
  );
}

export const CartHeaderBar = () => {
  return (
    <Header
      statusBarProps={{ translucent: true }}
      containerStyle={styles.header}
    >
      <HeaderLeft />
      <HeaderCenter />
    </Header>
  );
}
