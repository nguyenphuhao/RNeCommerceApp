import React, { useState } from 'react';
import { View, Text } from 'react-native';
import { ItemList, ProductItem } from '../../components';
import { useGetProductByCategory } from '../../hooks';
import { useRoute } from '@react-navigation/native';
import styles from "./styles";

const ProductListScreen = () => {
  const route = useRoute();
  const { categoryId } = route.params;
  const [ productState, fetchProduct, fetchMoreProduct ] = useGetProductByCategory({ categoryId, rows: 10, page: 1 });

  return (
    <View style={styles.container}>
      <ItemList
        data={productState.products}
        renderItem={({ item }) => <ProductItem product={item} />}
        keyExtractor={item => item.id}
        isFetching={productState.isFetching}
        onRefresh={() => {
          fetchProduct({ categoryId, rows: 10, page: 1 })
        }}
        onEndReached={() => {
          fetchMoreProduct()
        }}
      />
    </View>
  )
};

export default ProductListScreen;