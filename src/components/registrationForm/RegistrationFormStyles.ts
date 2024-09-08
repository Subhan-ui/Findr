import {StyleSheet} from 'react-native';

import {colors} from '../../constants/colors/colors';
import { hp, wp, scaleFont } from '../../constants/contents';

const styles = StyleSheet.create({
  safeArea: {
    display: 'flex',
    justifyContent: 'center',
    marginLeft: wp(8),
    marginRight: wp(8),
  },
  nameInput: {
    marginBottom: 6,
    fontWeight: '500',
    color: colors.black,
  },
  Input: {
    borderWidth: 2,
    borderColor: colors.gray,
    paddingLeft: 14,
    paddingRight: 14,
    paddingTop: hp(1),
    paddingBottom: hp(1),
    height: 44,
    borderRadius: 8,
  },
  remember: {
    marginTop: hp(3.5),
    display: 'flex',
    flexDirection: 'row',
    gap: wp(2),
    marginBottom: 24,
  },
  rememberWidth: {width: 20},
  viewRemember: {position: 'relative', bottom: 2},
  textRemember: {
    fontWeight: '500',
    color: 'black',
    fontSize: scaleFont(15),
    lineHeight: 20,
  },
  textRemember2: {
    fontWeight: '400',
    color: colors.darkGray,
    fontSize: scaleFont(15),
    lineHeight: 20,
  },
  belowButton: {marginTop: hp(4), display: 'flex', alignItems: 'center'},
  blueUnderline: {
    fontFamily: 'Familjen Grotesk',
    color: colors.blue,
    fontWeight: '400',
    fontSize: scaleFont(17),
    textDecorationLine: 'underline',
  },
});

export default styles;
