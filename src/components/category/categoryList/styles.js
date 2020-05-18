import { StyleSheet, Dimensions } from 'react-native';
import { Responsive } from '../../../utils';

const { height, width } = Dimensions.get('window'); // device height and width
const { verticalScale } = Responsive(width, height);
export default StyleSheet.create({
  cateList: {
    backgroundColor: '#fff',
    marginBottom: 10,
    borderColor: '#ebebeb',
    borderWidth: 1,
    height: verticalScale(120),
  },
});
