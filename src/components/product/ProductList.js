import React from 'react';
import { View } from 'react-native';
import styles from './styles';
import { ScrollView, Text } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import ProductItem from './ProductItem';

const CategoryList = ({ data }) => {
  const renderCategory = ({ category }) => {
    return (
      <View key={`category-${category.id}`} style={styles.productGroup}>
        <Text style={styles.productGroupText}>{category.name}</Text>
        <TouchableOpacity style={styles.viewAllButton}>
          <Text style={styles.viewAllText}>View All</Text>
        </TouchableOpacity>
      </View>
    );
  };

  return (
    <>
      {data && data.length ? (
        <ScrollView style={styles.productList}>
          {data.map((category) => {
            return (
              <>
                {renderCategory({ category })}
                <View
                  key={`product-group-${category.id}`}
                  style={styles.productItems}
                >
                  {category.products && category.products.length ? (
                    category.products.map((product) => {
                      return <ProductItem product={product} />;
                    })
                  ) : (
                    <Text style={styles.noProduct}>No Product</Text>
                  )}
                </View>
              </>
            );
          })}
        </ScrollView>
      ) : (
        <Text style={styles.noProduct}>No Product</Text>
      )}
    </>
  );
};

export default CategoryList;
