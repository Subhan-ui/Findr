import {StyleSheet} from 'react-native';

import {colors} from '../../constants/colors/colors';
import { hp, scaleFont } from '../../constants/constants';

const styles = StyleSheet.create({
  imageView: {
    display: 'flex',
    width: '100%',
    alignItems: 'flex-end',
  },
  image: {
    height: hp(18),
  },
  textWrap: {
    position: 'relative',
    bottom: 12,
    display: 'flex',
    alignItems: 'center',
  },
  text: {
    fontFamily: 'Familjen Grotesk',
    color: colors.blue,
    fontSize: scaleFont(66),
    fontWeight: '700',
  },
  secText: {
    fontWeight: '400',
    color: colors.black,
    fontSize: scaleFont(24),
    fontFamily: 'Familjen Grotesk',
  },
});

export default styles;
