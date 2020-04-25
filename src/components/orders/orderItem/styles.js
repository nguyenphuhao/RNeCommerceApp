import { StyleSheet, Dimensions } from 'react-native';
import {  Color } from '../../../styles';

import { Responsive } from '../../../utils';

const { height, width } = Dimensions.get('window'); // device height and width
const { moderateScale, verticalScale } = Responsive(width, height);
export default StyleSheet.create({
  productItem: {
    flexDirection: 'row',
    width: width - 20,
    height: verticalScale(70),
    backgroundColor: '#fff',
    paddingHorizontal: 10,
    paddingVertical: 10,
    borderColor: '#ebebeb',
    borderWidth: 1,
    marginVertical: 5,
    borderRadius: 7,
  },
  productImg: {
    marginHorizontal: 20,
    alignSelf: 'center',
    width: moderateScale(50),
    height: verticalScale(50),
  },
  productInfo: {
    flex: 1,
  },
  noProduct: {
    textAlign: 'center',
    paddingVertical: 10,
  },
  price: {
    flexDirection: 'row',
    alignItems: 'flex-start',
  },
  boldText: {
    fontWeight: 'bold',
  },
  boldBlueText: {
    fontWeight: 'bold',
    color: Color.background.color,
  },
  strikeText: {
    textDecorationLine: 'line-through',
  },
});
