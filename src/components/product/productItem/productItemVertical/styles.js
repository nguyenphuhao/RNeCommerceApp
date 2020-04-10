import { StyleSheet, Dimensions } from 'react-native';
import { TextSize, Color } from '../../../../styles';

import { Responsive } from '../../../../utils';

const { height, width } = Dimensions.get('window'); // device height and width
const { moderateScale, verticalScale } = Responsive(width, height);
export default StyleSheet.create({
  containerHor: {
    flex: 1,
    alignItems: 'center',
  },
  productItems: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    flexWrap: 'wrap',
    flexGrow: 2,
    paddingBottom: 10,
  },
  productItem: {
    flexDirection: 'row',
    width: width - 20,
    height: verticalScale(120),
    backgroundColor: '#fff',
    paddingHorizontal: 10,
    paddingVertical: 20,
    borderColor: '#ebebeb',
    borderWidth: 1,
    marginVertical: 5,
    borderRadius: 7,
  },
  productImg: {
    marginHorizontal: 20,
    alignSelf: 'center',
    width: moderateScale(100),
    height: verticalScale(100),
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
