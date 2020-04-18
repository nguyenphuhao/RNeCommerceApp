import { StyleSheet, Dimensions } from 'react-native';
import { Color } from '../../styles';
import { Responsive } from '../../utils';
const { height, width } = Dimensions.get('window'); // device height and width
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
 text: {
  color: '#fff',
 }
});

export default styles;