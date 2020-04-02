import { StyleSheet } from 'react-native';
import { TextSize, Color } from '../../styles';
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
});
