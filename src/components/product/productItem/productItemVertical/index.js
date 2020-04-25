import React from 'react';
import { View } from 'react-native';
import { Image, Text } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import styles from './styles';

const ProductItemVertical = ({ product }) => {
  const cell = product.cell;
  return (
    <TouchableOpacity onPress={() => { onPressItem(product); }}
      style={styles.productItem}
    >
      <Image style={styles.productImg} source={{ uri: 'http:' + cell.thumb }} />
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
    </TouchableOpacity>
  );
}

export default ProductItemVertical;
