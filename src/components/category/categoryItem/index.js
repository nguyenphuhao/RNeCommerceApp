import React from 'react';
import styles from './styles';
import { Image, Text } from 'react-native';
import unescape from 'lodash/unescape';
import { TouchableOpacity } from 'react-native-gesture-handler';

const CategoryItem = (props) => {
  const { item, onPressItem } = props;
  return (
    <TouchableOpacity onPress={() => { onPressItem(item) }} style={styles.cateItem}>
      <Image style={styles.cateImg} source={{ uri: 'http:' + item.thumb }} />
      <Text style={styles.cateName}>{unescape(item.name)}</Text>
    </TouchableOpacity>
  );
}

export default CategoryItem;
