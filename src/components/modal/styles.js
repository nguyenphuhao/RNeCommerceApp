import { StyleSheet, Dimensions } from 'react-native';
import { Responsive } from '../../utils';
const { height, width } = Dimensions.get('window'); // device height and width
const { moderateScale, verticalScale } = Responsive(width, height);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    position: 'relative',
    paddingVertical: verticalScale(15),
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 20,
    textAlign: 'center'
  },
  description: {
    fontSize: 16,
    textAlign: 'center',
    paddingVertical: width * 0.05
  },
  buttons: {
    position: 'absolute',
    bottom: 20,
    left: 10,
    right: 10,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    marginHorizontal: 5,
  }
});

export default styles;