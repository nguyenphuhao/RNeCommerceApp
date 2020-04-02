import React from 'react';
import { View } from 'react-native';
import styles from './styles';
import { Image, Text, ScrollView, TouchableOpacity } from 'react-native';
import { Icon } from 'react-native-elements';

const ProductDetail = ({ product }) => {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.product}>
        <Image style={styles.productImg} source={{ uri: product.img }} />
        <TouchableOpacity style={styles.productInstock}>
          <Text style={styles.productInstockText}>Instock</Text>
        </TouchableOpacity>
        <Text style={styles.productNameText}>{product.productName}</Text>
        <View style={styles.price}>
          <Text style={{ ...styles.boldText, ...styles.currentPrice }}>
            {product.price}
          </Text>
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
      </View>
      <View style={styles.productColor}>
        <Text style={styles.productColorTitle}>Select color:</Text>
        <View style={styles.productColorList}>
          {product.colors.map(color => {
            return (
              <Text key={color} style={styles.productColorItem}>
                {color}
              </Text>
            );
          })}
        </View>
      </View>
      <View style={styles.productDesc}>
        <Text style={styles.productDescTitle}>Description</Text>
        <Text style={styles.productDescText}>{product.description}</Text>
      </View>
      <View style={styles.buttons}>
        <TouchableOpacity style={styles.productWishList}>
          <Icon name="gratipay" type="font-awesome" color="#00a1cb" />
          <Text style={styles.productWishListText}> WishList</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.productAddCart}>
          <Text style={styles.productAddCartText}>Add To Cart</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};
export default ProductDetail;
