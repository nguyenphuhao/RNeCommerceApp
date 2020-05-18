import React from 'react';
import CategoryItem from '../categoryItem';
import styles from './styles';
import ItemList from '../../itemList';

const CategoryList = (props) => {
  const { categories, onPressItem } = { ...props };
  return (
    <ItemList
      {...props}
      style={styles.cateList}
      data={categories}
      horizontal={true}
      renderItem={({ item }) => <CategoryItem item={item} onPressItem={onPressItem} />}
      keyExtractor={item => item.category_id}
    />
  );
}

export default CategoryList;
