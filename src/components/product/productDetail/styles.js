import { StyleSheet, Dimensions } from 'react-native';
import { TextSize, Color } from '../../../styles';
import { Responsive } from '../../../utils';

const { height, width } = Dimensions.get('window'); // device height and width
const { moderateScale, verticalScale } = Responsive(width, height);
export default StyleSheet.create({
  container: {
    flex: 1,
    width: width,
    backgroundColor: '#bebebe',
  },
  // Product Info
  product: {
    flex: 1,
    backgroundColor: '#fff',
    borderWidth: 1,
    borderColor: '#bebebe',
    padding: 10,
  },
  productImg: {
    alignSelf: 'center',
    width: moderateScale(150),
    height: verticalScale(150),
  },
  productInstock: {
    marginVertical: 5,
    flexDirection: 'row',
    justifyContent: 'flex-end',
  },
  productInstockText: {
    color: '#fff',
    backgroundColor: Color.background.color,
    paddingHorizontal: 20,
    paddingVertical: 3,
    borderRadius: 5,
  },
  productNameText: {
    marginVertical: 5,
    fontSize: TextSize.NORMAL_SIZE,
  },
  // Price
  price: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  boldText: {
    fontWeight: 'bold',
  },
  currentPrice: {
    fontSize: TextSize.NORMAL_SIZE,
  },
  boldBlueText: {
    fontWeight: 'bold',
    color: Color.background.color,
  },
  strikeText: {
    textDecorationLine: 'line-through',
  },
  // Product Color
  productColor: {
    backgroundColor: '#fff',
    marginVertical: 10,
    borderWidth: 1,
    borderColor: '#bebebe',
    paddingBottom: 10,
  },
  productColorList: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  productColorTitle: {
    fontSize: TextSize.NORMAL_SIZE,
    fontWeight: 'bold',
    color: Color.background.color,
    padding: 10,
  },
  productColorItem: {
    paddingHorizontal: 10,
    paddingVertical: 2,
    backgroundColor: '#bebebe',
    marginBottom: 5,
    marginHorizontal: 10,
    textAlign: 'center',
  },

  //Product Desc
  productDesc: {
    backgroundColor: '#fff',
    borderWidth: 1,
    borderBottomWidth: 0,
    borderColor: '#bebebe',
    padding: 10,
  },
  productDescTitle: {
    fontSize: TextSize.NORMAL_SIZE,
    fontWeight: 'bold',
    color: Color.background.color,
  },

  //Buttons
  buttons: {
    width: width,
    height: 50,
    flexDirection: 'row',
    justifyContent: 'flex-start',
  },
  productWishList: {
    flexDirection: 'row',
    width: width / 2,
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  productWishListText: {
    textAlign: 'center',
  },
  iconWishList: {
    backgroundColor: '#e4f7ff',
  },
  productAddCart: {
    width: width / 2,
    height: '100%',
    justifyContent: 'center',
    backgroundColor: Color.background.color,
  },
  productAddCartText: {
    textAlign: 'center',
    color: '#fff',
  },
});
