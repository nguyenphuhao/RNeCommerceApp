import React from 'react';
import { Text } from 'react-native';
import { Button as RNButton } from 'react-native-elements';
import styles from './styles';

const Button = (props) => {
  return (
    <RNButton 
      {...props}
      containerStyle={{...styles.container, ...props.buttonStyle}}
      title={props.title || ''}
    />
  )
}

export default Button;