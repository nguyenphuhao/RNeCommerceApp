import React from 'react';
import { View } from 'react-native';
import styles from './styles';
import { ScrollView, Image, Text } from 'react-native';
import unescape from 'lodash/unescape';

const CategoryList = ({ categories }) => {
  return (
    <>
      {categories && categories.length ? (
        <ScrollView style={styles.cateList} horizontal={true}>
          {categories.map(c => {
            return (
              <View key={c.id} style={styles.cateItem}>
                <Image style={styles.cateImg} source={{ uri: 'http:' + c.thumb }} />
                <Text style={styles.cateName}>{unescape(c.name)}</Text>
              </View>
            );
          })}
        </ScrollView>
      ) : (
        <></>
      )}
    </>
  );
};

export default CategoryList;
