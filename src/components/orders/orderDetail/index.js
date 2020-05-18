import React from 'react';
import { View, Text } from 'react-native';
import styles from './styles';
import TextLink from '../../link';
const OrderDetail = ({ item }) => {
  return (
    <>
      {item ? (
        <View
          style={styles.container}
          onPress={() => { onPressItem(item); }}>
          <View style={styles.row}>
            <Text style={styles.col}>{`Order Id:`}</Text>
            <Text style={styles.col}>{item.order_id}</Text>
          </View>

          <View style={styles.row}>
            <Text style={styles.col}>{`Date Added: ${item.date_added}`}</Text>
            <Text style={styles.col}>{`Customer: ${item.name}`}</Text>
          </View>

          <View style={styles.row}>
            <Text style={styles.col}>{`Products: ${item.products}`}</Text>
            <Text style={styles.col}>{`Total: ${item.total}`}</Text>
          </View>

          <View style={{ ...styles.row, ...styles.footer }}>
            <TextLink onPress={() => { console.log('test') }}>View Order Details</TextLink>
          </View>
        </View>
      ) : <Text></Text>}

    </>
  );
};

export default OrderDetail;
