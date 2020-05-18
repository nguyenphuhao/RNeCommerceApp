import React from 'react';
import { View, Text, Dimensions } from 'react-native';
import { Overlay, Icon } from 'react-native-elements';
import Button from '../button';
import styles from './styles';
import { Color } from '../../styles';
import { success, danger, warning } from '../../constants';
import * as Animatable from 'react-native-animatable';

const { height, width } = Dimensions.get('window'); // device height and width
const Modal = ({ type, title, description, buttons, isVisible }) => {
  let icon = {
    name: 'info-circle',
    color: Color.background.color
  };
  switch (type) {
    case success:
      icon.name = 'check-circle';
      icon.color = 'green';
      break;
    case danger:
      icon.name = 'times-circle';
      icon.color = 'red';
      break;
    case warning:
      icon.name = 'exclamation-circle';
      icon.color = '#f8bb86';
      break;
  }
  return (

    <Overlay isVisible={isVisible}
      width="auto"
      height={height * 0.35}>
      <Animatable.View style={styles.container} animation='fadeIn'>
        <Icon
          name={icon.name}
          type='font-awesome'
          color={icon.color}
          size={50}
        />
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.description}>{description}</Text>
        {buttons && buttons.length && (
          <View style={styles.buttons}>
            {buttons.map((button, index) => {
              return (
                <Button buttonStyle={styles.button} key={'modal-button-'+index} {...button} />
              )
            })}
          </View>
        )}
      </Animatable.View >
    </Overlay>

  );
}

export default Modal;