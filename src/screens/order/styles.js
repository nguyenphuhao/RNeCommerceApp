import { StyleSheet, Dimensions } from 'react-native';
import { TextSize } from '../../styles';
const { height, width } = Dimensions.get('window'); // device height and width
export default StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'flex-start',
    padding: 10,
  },
  itemList: {
    flex: 1,
  },
  
});
