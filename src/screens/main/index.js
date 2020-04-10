import React, { useEffect, useState } from 'react';
import unescape from 'lodash/unescape';
import { SearchBar } from 'react-native-elements';
import styles from './styles';
import { ItemList, CategoryItem } from '../../components';
import { useNavigation } from '@react-navigation/native';
import { ScreenName } from '../../constants';
import { CatalogAPI } from '../../services';
import { SectionList, View, Text, TouchableOpacity } from 'react-native';

const MainScreen = () => {
  const navigation = useNavigation();
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    fetchCategories()
  }, []);

  const fetchCategories = () => {
    CatalogAPI.getCategories().then((category) => {
      const subCates = category && category.subcategories;
      setCategories(subCates);
    }).catch(() => {
      setCategories([]);
    });
  }

  const getProductGroupByCategory = () => {
    return categories && categories.map(category => {
      return {
        ...category,
        data: ['Update in next commit.'],
      }
    })
  }

  const onPressProductItem = (product) => {
    navigation.navigate(ScreenName.ProductDetail, { product });
  };

  const goToProductList = (category) => {
    navigation.navigate(ScreenName.ProductList, { categoryId: category.category_id, title: category.name })
  }

  return (
    <>
      <SearchBar
        containerStyle={styles.search}
        inputContainerStyle={styles.searchInput}
        placeholder="Search for products"
        onChangeText={() => { }}
        value={''}
      />
      <ItemList
        style={styles.cateList}
        data={categories}
        horizontal={true}
        renderItem={({ item }) => <CategoryItem item={item} onPressItem={() => { goToProductList(item) }} />}
        keyExtractor={item => item.category_id}
      />
      <SectionList
        style={styles.productSection}
        sections={getProductGroupByCategory()}
        keyExtractor={(item, index) => item + index}
        renderSectionHeader={({ section: { category_id, name } }) => (
          <View style={styles.productGroup}>
            <Text style={styles.productGroupText}>{unescape(name)}</Text>
            <TouchableOpacity onPress={() => { goToProductList({ category_id, name }) }} style={styles.viewAllButton}>
              <Text style={styles.viewAllText}>View All</Text>
            </TouchableOpacity>
          </View>
        )}
        renderItem={({ item }) => <Text>{item}</Text>}
      />
    </>
  );
};

export default MainScreen;
