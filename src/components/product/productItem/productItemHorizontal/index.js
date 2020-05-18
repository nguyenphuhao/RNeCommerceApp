import React from 'react';
import { View } from 'react-native';
import styles from './styles';
import { Image, Text } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

const ProductItemHorizontal = ({ product, onPressProductItem }) => {
  return (
    <TouchableOpacity onPress={() => { onPressProductItem(product); }}
      style={styles.productItem}
    >
      <Image style={styles.productImg} source={{ uri: product.img }} />
      <Text>{product.productName}</Text>
      <View style={styles.price}>
        <Text style={styles.boldText}>{product.price}</Text>
        {product.discount && product.discount.oldPrice && (
          <Text style={styles.strikeText}>
            {'\t'}
            {product.discount.oldPrice}
          </Text>
        )}
        {product.discount && product.discount.description && (
          <Text style={styles.boldBlueText}>
            {'\t'}
            {product.discount.description}
          </Text>
        )}
      </View>
    </TouchableOpacity>
  );
};

export default ProductItemHorizontal;