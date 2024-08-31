import {StyleSheet} from 'react-native';
import {colors} from '../../../constants/colors/colors';

const styles = StyleSheet.create({
  wrapperView: {marginTop: 16},
  text: {fontWeight: '500', fontSize: 14, color: 'black'},
  textInput: {
    paddingLeft: 14,
    paddingRight: 14,
    paddingTop: 10,
    paddingBottom: 10,
    height: 44,
    borderWidth: 2,
    borderColor: colors.gray,
    borderRadius: 8,
  },
});

export default styles;
