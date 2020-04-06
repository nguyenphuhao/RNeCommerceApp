import { StyleSheet } from 'react-native';
import { TextSize, Color } from '../../styles';
export default StyleSheet.create({
  container: {
    flex: 12,
    padding: 10,
  },
  caption: {
    flex: 6,
    textAlignVertical: 'center',
    textAlign: 'center',
    color: '#fff',
    elevation: 1,
  },
  form: {
    flex: 3,
  },
  input: {
    color: '#fff',
  },
  action: {
    flex: 2,
    marginTop: -20,
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
  },
  signUpText: {
    ...Color.link,
    ...TextSize.normal,
    textAlign: 'center',
    marginTop: 6,
  },
  skipLogin: {
    flex: 1,
    justifyContent: 'flex-end',
    alignSelf: 'center',
  },
});
