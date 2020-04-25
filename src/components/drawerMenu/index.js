import React from 'react';
import { View } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Text, Divider } from 'react-native-elements';
import { Color } from '../../styles';
import styles from './styles';
import { ScreenName } from '../../constants';
import {
  DrawerContentScrollView,
  DrawerItem,
} from '@react-navigation/drawer';

const DrawerIcon = ({ name }) => {
  const iconStyle = {
    width: 40,
    textAlign: 'center',
    marginLeft: 5,
  };
  return <Icon name={name} size={25} color={Color.background.color} style={iconStyle} />;
};


const Menu = props => {
  const navigation = props.navigation;
  const { navigate } = navigation;
  return (
    <DrawerContentScrollView {...props}>
      <Text style={styles.heading} h4>Ecommerce{'\n'}Store</Text>
      <Text style={styles.caption}>My Account</Text>
      <View style={styles.drawerItemContainer}>
        <DrawerIcon name='user' />
        <DrawerItem labelStyle={styles.drawerLabel} label="My Profile" onPress={() => navigate(ScreenName.Profile)} />
      </View>
      <View style={styles.drawerItemContainer}>
        <DrawerIcon name='heart' />
        <DrawerItem labelStyle={styles.drawerLabel} label="My Wish List" onPress={() => navigate(ScreenName.WishList)} />
      </View>
      <View style={styles.drawerItemContainer}>
        <DrawerIcon name='shopping-cart' />
        <DrawerItem labelStyle={styles.drawerLabel} label="My Cart" onPress={() => navigate(ScreenName.Cart)} />
      </View>
      <View style={styles.drawerItemContainer}>
        <DrawerIcon name='cart-arrow-down' />
        <DrawerItem labelStyle={styles.drawerLabel} label="My Orders" onPress={() => navigate(ScreenName.Orders)} />
      </View>
      <Divider style={styles.divider} />
      <Text style={styles.caption}>Support</Text>
      <View style={styles.drawerItemContainer}>
        <DrawerIcon name='envelope' />
        <DrawerItem labelStyle={styles.drawerLabel} label="Email" onPress={() => navigate(ScreenName.Email)} />
      </View>
      <View style={styles.drawerItemContainer}>
        <DrawerIcon name='phone' />
        <DrawerItem labelStyle={styles.drawerLabel} label="Call" onPress={() => navigate(ScreenName.Call)} />
      </View>
      <Divider style={styles.divider} />
      <Text style={styles.caption}>Others</Text>
      <View style={styles.drawerItemContainer}>
        <DrawerIcon name='share-alt' />
        <DrawerItem labelStyle={styles.drawerLabel} label="Share" onPress={() => navigate(ScreenName.Share)} />
      </View>
    </DrawerContentScrollView>
  );
};
export default Menu;
