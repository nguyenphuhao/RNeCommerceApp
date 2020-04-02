import { StyleSheet } from 'react-native';
import { TextSize, Color } from '../../styles';
export default StyleSheet.create({
  container: {
    flex: 10,
    padding: 10,
  },
  caption: {
    flex: 3,
    textAlign: 'center',
    textAlignVertical: 'center',
    ...Color.caption,
    elevation: 1,
  },
  form: {
    flex: 4,
    marginBottom: 20,
    justifyContent: 'flex-end',
  },
  input: {},
  action: {
    flex: 3,
    paddingHorizontal: 10,
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
  signInText: {
    ...Color.link,
    ...TextSize.normal,
    textAlign: 'center',
    marginTop: 6,
  },
});
