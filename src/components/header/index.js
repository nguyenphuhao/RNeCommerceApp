import React from 'react';
import { View, Text } from 'react-native';
import { Header, Icon } from "react-native-elements";
import styles from "./styles";
import { TouchableOpacity } from 'react-native-gesture-handler';
import { useRoute, useNavigation, useNavigationState } from '@react-navigation/native';
import { Options } from '../../navigation';

export const HeaderMenu = () => {
  const navigation = useNavigation();
  return (
    <TouchableOpacity onPress={() => {}}>
      <Icon
        name='bars'
        type='font-awesome'
        color='#fff'
        size={30} />
    </TouchableOpacity>
  )
}

export const HeaderBack = () => {
  const navigation = useNavigation();
  return (
    <TouchableOpacity>
      <Icon
        onPress={navigation.goBack}
        name='arrow-left'
        type='font-awesome'
        color='#fff'
        size={30} />
    </TouchableOpacity>

  )
}

export const HeaderLeft = () => {
  const navigation = useNavigation();
  const chilrend = navigation.canGoBack() ? <HeaderBack /> : <HeaderMenu />
  return (
    <View style={styles.headerLeft}>
      {chilrend}
    </View>
  )
}

export const HeaderRight = (props) => {
  const chilrend = props.chilrend || <Icon name='shopping-cart' type='font-awesome' size={30} color='#fff' />
  return (
    <TouchableOpacity style={styles.headerRight}>
      {chilrend}
    </TouchableOpacity>
  )
}

export const HeaderCenter = (props) => {
  const route = useRoute();
  const chilrend = props.chilrend || <Text style={styles.headerTitle}>{Options.getScreenOptions(route.name).headerTitle}</Text>
  return (
    <View>
      {chilrend}
    </View>
  );
}
export const AppHeader = () => {
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

export const RegistrationHeader = () => {
  return (
    <Header
      backgroundColor={'transparent'}
      statusBarProps={{ translucent: true }}
    >
      <HeaderLeft />
    </Header>
  );
}

export const CartHeader = () => {
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
