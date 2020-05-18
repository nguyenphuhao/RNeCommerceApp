import React, { useState } from 'react';
import { FlatList, ActivityIndicator, Text } from 'react-native';
import { Color } from '../../styles';
import styles from './styles';
import * as Animatable from 'react-native-animatable';


const ItemList = (props) => {
  const [refreshing, setRefreshing] = useState(false);
  return (
    <>
      {props.isFetching ? (
        <Animatable.View animation='flipInX'>
          <ActivityIndicator style={styles.footerIndicator} size="small" color={Color.background.color} />
        </Animatable.View>
        
      ) : (
          <FlatList
            {...props}
            data={props.data && props.data.length ? props.data : []}
            keyExtractor={item => item.id}
            refreshing={refreshing}
            onRefresh={() => {
              setRefreshing(true)
              props.onRefresh()
              setTimeout(() => {
                setRefreshing(false)
              }, 10000)
            }}
            onEndReachedThreshold={0.05}
          />
      )}
    </>

  )
}

export default ItemList;