import { StyleSheet } from 'react-native';
import { TextSize, Color } from '../../styles';
const styles = StyleSheet.create({
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
    color: '#fff',
    fontSize: TextSize.NORMAL_SIZE,
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
export default styles;
