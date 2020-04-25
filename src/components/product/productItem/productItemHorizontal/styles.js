import { StyleSheet, Dimensions } from 'react-native';
import { Color } from '../../../../styles';

import { Responsive } from '../../../../utils';

const { height, width } = Dimensions.get('window'); // device height and width
const { verticalScale } = Responsive(width, height);
export default StyleSheet.create({
  productItem: {
    width: width * 0.5 - 20,
    height: verticalScale(250),
    justifyContent: 'flex-start',
    paddingHorizontal: 10,
    paddingVertical: 20,
    borderColor: '#ebebeb',
    borderWidth: 1,
    marginVertical: 5,
    borderRadius: 7,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 1,
  },
  productImg: {
    alignSelf: 'center',
    width: '75%',
    height: '75%',
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
