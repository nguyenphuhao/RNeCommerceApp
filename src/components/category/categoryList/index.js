import React from 'react';
import { View } from 'react-native';
import styles from './styles';
import { ScrollView, Image, Text } from 'react-native';

const CategoryList = ({ data }) => {
  return (
    <>
      {data && data.length ? (
        <ScrollView style={styles.cateList} horizontal={true}>
          {data.map(c => {
            return (
              <View key={c.id} style={styles.cateItem}>
                <Image style={styles.cateImg} source={{ uri: c.img }} />
                <Text style={styles.cateName}>{c.name}</Text>
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
