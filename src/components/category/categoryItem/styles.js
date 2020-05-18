import { StyleSheet, Dimensions } from 'react-native';
import { Responsive } from '../../../utils';

const { height, width } = Dimensions.get('window'); // device height and width
const { moderateScale } = Responsive(width, height);
export default StyleSheet.create({
  cateItem: {
    paddingTop: 10,
    paddingBottom: 90,
    alignItems: 'center',
    width: moderateScale(100),
  },
  cateImg: {
    width: moderateScale(60),
    height: moderateScale(60),
    borderWidth: 1,
    borderColor: '#000',
    borderRadius: 100,
  },
  cateName: {
    textAlign: 'center',
    marginTop: 3,
  },
});
