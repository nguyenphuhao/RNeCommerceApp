import React, { useState, useEffect } from 'react';
import { View, Text } from 'react-native';
import NetInfo from '@react-native-community/netinfo';
import styles from './styles';

const Connectivity = () => {
  const [isConnected, setConnected] = useState(true);
  useEffect(() => {
    const unsubscribe = NetInfo.addEventListener(state => {
      console.log('TestConnect', state.isConnected)
      setConnected(state.isConnected);
    });
    return function cleanup() {
      unsubscribe();
    }
  })

  if (!isConnected) {
    return (
      <View style={styles.container}>
        <Text style={styles.message}>No Internet Connection</Text>
      </View>
    )
  }
  return null;
}
export default Connectivity;