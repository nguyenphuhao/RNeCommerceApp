import { StyleSheet, Dimensions } from 'react-native';
import { TextSize, Color } from '../../styles';
import { Responsive } from '../../utils';

const { height, width } = Dimensions.get('window'); // device height and width
const { verticalScale } = Responsive(width, height);
export default StyleSheet.create({
  keyBoardView: {
    flex: 1,
  },
  container: {
    flex: 1,
    padding: 10,
    height: height - 30,
  },
  caption: {
    height: verticalScale(250),
    textAlignVertical: 'center',
    textAlign: 'center',
    color: '#fff',
    elevation: 1,
  },
  input: {
    height: 60,
  },
  errorMessage: {
    marginLeft: 10,
    color: 'red'
  },
  
  background: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
  },
  forgotPasswordText: {
    ...Color.link,
    ...TextSize.normal,
    textAlign: 'right',
    marginBottom: 10,
  },
  signUpText: {
    ...Color.link,
    ...TextSize.normal,
    textAlign: 'center',
    marginTop: 10,
  },
  skipLogin: {
    position: 'absolute',
    bottom: 0,
    justifyContent: 'flex-end',
    alignSelf: 'center',
  },
});
