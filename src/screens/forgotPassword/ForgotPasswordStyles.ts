import {StyleSheet} from 'react-native';

import {colors} from '../../constants/colors/colors';
import { hp, wp } from '../../constants/constants';

const styles = StyleSheet.create({
  wrapper: {marginHorizontal: wp(8)},
  header: {
    display: 'flex',
    flexDirection: 'row',
    gap: 8,
    alignItems: 'center',
    marginTop: hp(9),
    marginLeft: 14,
  },
  imageWrap: {marginTop: hp(7.5)},
  textWrap: {marginTop: hp(4.5)},
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
