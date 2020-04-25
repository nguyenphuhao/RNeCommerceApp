import { StyleSheet, Dimensions } from 'react-native';
import { TextSize } from '../../styles';
export default StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  itemList: {
    flex: 1,
  },
  footer: {
    position: 'absolute',
    bottom: 0,
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
    paddingVertical: 10,
    paddingHorizontal: 15,
    backgroundColor: '#fff',
  },
  dateText: {
    fontSize: TextSize.TINY_SIZE
  }
});
