import { StyleSheet, Dimensions } from 'react-native';
import { TextSize, Color } from '../../styles';
import { Responsive } from '../../utils';

const { height, width } = Dimensions.get('window'); // device height and width
const { verticalScale } = Responsive(width, height);
export default StyleSheet.create({
  header: {
    backgroundColor: Color.background.color,
    borderBottomWidth: 0,
  },
  headerTitle: {
    fontSize: TextSize.BIG_SIZE,
    color: '#fff',
    fontStyle: 'italic',
  },
  headerRight: {
    width: 60,
    color: '#fff',
    fontSize: TextSize.NORMAL_SIZE,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  headerLeft: {
    color: '#fff',
    fontSize: TextSize.NORMAL_SIZE,
  },
  search: {
    paddingHorizontal: 12,
    paddingBottom: 10,
    backgroundColor: Color.background.color,
    borderTopWidth: 0,
  },
  searchInput: {
    backgroundColor: '#fff',
  },
  cateList: {
    backgroundColor: '#fff',
    marginBottom: 10,
    borderColor: '#ebebeb',
    borderWidth: 1,
    height: verticalScale(120),
  },
  productSection: {
    backgroundColor: '#fff',
    padding: 10
  },
  productGroup: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
  },
  productGroupText: {
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
});
