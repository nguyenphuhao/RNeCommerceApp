import React from 'react';
import { View, Text, Image } from 'react-native';
import styles from './styles';
const OrderItem = ({ product }) => {
  console.log(product)
  const cell = product.cell;
  return (
    <>
      {product ? (
        <View onPress={() => { onPressItem(product); }}
          style={styles.productItem}
        >
          <View style={styles.productInfo}>
            <Text>{cell.name}</Text>
            <View style={styles.price}>
              <Text style={styles.boldText}>{cell.price} {cell.currency_code}</Text>
              {cell.discount && cell.discount.oldPrice && (
                <Text style={styles.strikeText}>
                  {'\t'}
                  {product.discount.oldPrice} {cell.currency_code}
                </Text>
              )}
              {cell.discount && cell.discount.description && (
                <Text style={styles.boldBlueText}>
                  {'\t'}
                  {cell.discount.description}
                </Text>
              )}
            </View>
          </View>
          <Image style={styles.productImg} source={{ uri: 'http:' + cell.thumb }} />
        </View>
      ) : <View></View>}

    </>
  );
};

export default OrderItem;
