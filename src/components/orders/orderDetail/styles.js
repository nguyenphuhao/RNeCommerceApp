import { StyleSheet, Dimensions } from 'react-native';
import {  TextSize, Color } from '../../../styles';

import { Responsive } from '../../../utils';

const { height, width } = Dimensions.get('window'); // device height and width
const { moderateScale, verticalScale } = Responsive(width, height);
export default StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    backgroundColor: '#fff',
    paddingVertical: 15,
    paddingHorizontal: 20,
    borderWidth: 1,
    borderColor: '#ebebeb',
    marginVertical: 5
  },
  row : {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  col: {
    flexDirection: 'row',
  },  
  footer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 10
  },
  dateText: {
    fontSize: TextSize.TINY_SIZE
  }
});
