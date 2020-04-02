import { StyleSheet } from 'react-native';
import { TextSize, Color } from '../../styles';
export default StyleSheet.create({
  productList: {
    padding: 10,
    backgroundColor: '#fff',
    borderWidth: 1,
    borderColor: '#ebebeb',
  },
  productGroup: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
  },
  productGroupText: {
    flex: 1,
    fontSize: TextSize.NORMAL_SIZE,
    color: Color.background.color,
  },
  viewAllButton: {
    backgroundColor: Color.background.color,
    paddingHorizontal: 20,
    paddingVertical: 5,
    borderRadius: 3,
  },
  viewAllText: {
    color: '#fff',
    fontSize: TextSize.TINY_SIZE,
    fontWeight: 'bold',
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
    width: '49%',
    height: 250,
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
  productName: {},
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
