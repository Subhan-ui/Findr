import {StyleSheet} from 'react-native';

import {colors} from '../../constants/colors/colors';
import {hp, wp, scaleFont, height} from '../../constants/constants';

const styles = StyleSheet.create({
  wrapper: {
    height: height,
    flex: 1,
    marginTop: hp(6),
    marginLeft: wp(8),
    marginRight: wp(8),
  },
  content: {flex: 1},
  logoWrap: {
    display: 'flex',
    alignItems: 'center',
  },
  heading: {
    fontFamily: 'Familjen Grotesk',
    fontWeight: '700',
    fontSize: scaleFont(42),
    color: 'black',
    marginTop: hp(2.5),
  },
  buttonWrap: {
    marginTop: hp(4),
  },
  options: {
    display: 'flex',
    flexDirection: 'row',
    gap: wp(2),
    justifyContent: 'center',
    marginTop: hp(3),
  },
  optionsText: {
    fontFamily: 'Familjen Grotesk',
    fontSize: scaleFont(11),
    fontWeight: '400',
    color: 'black',
    lineHeight: scaleFont(13),
  },
  or: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: hp(1),
    marginTop: hp(3),
  },
  orLine: {
    flex: 1,
    height: 1,
    backgroundColor: colors.line,
  },
  textOr: {
    marginHorizontal: wp(7),
    color: 'black',
    fontFamily: 'Familjen Grotesk',
    fontSize: scaleFont(16),
  },
  footer: {
    display: height >= 750 ? 'flex' : 'none',
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    alignItems: 'center',
    paddingVertical: hp(0),
  },
});

export default styles;
