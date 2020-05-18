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
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    paddingLeft: 10,
  },
  headerLeft: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
  },
  headerRegistration: {
    margin: 20,
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
