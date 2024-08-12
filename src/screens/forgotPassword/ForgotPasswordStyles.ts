import {StyleSheet} from 'react-native';
import {colors} from '../../constants/colors/colors';

const styles = StyleSheet.create({
  wrapper: {marginHorizontal: 33},
  header: {
    display: 'flex',
    flexDirection: 'row',
    gap: 8,
    alignItems: 'center',
    marginTop: 60,
    marginLeft: 14,
  },
  imageWrap: {marginTop: 56},
  textWrap: {marginTop: 34},
  text: {
    fontFamily: 'Familjen Grotesk',
    fontWeight: '400',
    fontSize: 16,
    textAlign: 'center',
    lineHeight: 19,
    color: colors.shady,
  },
  buttonWrap: {marginTop: 10},
});

export default styles;
