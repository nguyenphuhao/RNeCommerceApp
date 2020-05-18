import React from 'react';
import { Icon } from 'react-native-elements';
import styles from './styles';
const SplashScreen = () => {
  return (
    <Icon
      containerStyle={styles.container}
      name={'heartbeat'}
      type='font-awesome'
      size={100}
      color='#f50'
    />
  );
};

export default SplashScreen;
