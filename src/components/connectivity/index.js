import React, { useState, useEffect } from 'react';
import { View, Text, Alert  } from 'react-native';
import NetInfo from '@react-native-community/netinfo';
import DeviceSettings from 'react-native-device-settings';
import styles from './styles';
import {
  no_internet_connection,
  no_internet_connection_message,
  ok,
  turn_on,
} from '../../constants';

const Connectivity = () => {
  const [state, setState] = useState({
    isConnected: true,
  });
  useEffect(() => {
    const unsubscribe = NetInfo.addEventListener(s => {
      if (state.isConnected != s.isConnected) {
        if (!s.isConnected) {
          Alert.alert(
            no_internet_connection,
            no_internet_connection_message,
            [
              {
                text: ok,
                onPress: () => { },
              },
              {
                text: turn_on,
                onPress: () => { DeviceSettings.wifi(); },
              },
            ]
          );
        }
        setState({
          isConnected: s.isConnected,
        });
      }
    });
    return function cleanup() {
      unsubscribe();
    }
  }, [state])

  return (
    <>
      {!state.isConnected && (
        <View style={styles.container}>
          <Text style={styles.message}>{no_internet_connection}</Text>
        </View>
      )}
    </>
  );
}
export default Connectivity;