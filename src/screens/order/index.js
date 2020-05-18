import React from 'react';
import { View, Text } from 'react-native';
import { OrderItem, ItemList, ProductItem, TextLink } from '../../components';
import orders from '../../mocks/orders.json';
import styles from './styles';
const OrderScreen = () => {
  return (
    <View style={styles.container}>
      <ItemList
        containerStyle={styles.itemList}
        data={orders}
        renderItem={({ item }) => <OrderItem item={item} />}
        keyExtractor={item => item.id}
        isFetching={false}
      />
    </View>
  )
};

export default OrderScreen;
