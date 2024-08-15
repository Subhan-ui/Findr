import {StyleSheet} from 'react-native';
import {colors} from '../../constants/colors/colors';

const styles = StyleSheet.create({
  textWrapper: {
    marginTop: 12,
    backgroundColor: colors.blue,
    borderRadius: 8,
    height: 24,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {color: 'white', fontSize: 11},
});

export default styles;
