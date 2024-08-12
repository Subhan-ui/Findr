import {StyleSheet} from 'react-native';
import {colors} from '../../constants/colors/colors';

const styles = StyleSheet.create({
  safeArea: {
    display: 'flex',
    justifyContent: 'center',
    marginLeft: 34,
    marginRight: 34,
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
    paddingTop: 10,
    paddingBottom: 10,
    height: 44,
    borderRadius: 8,
  },
  remember: {
    marginTop: 26,
    display: 'flex',
    flexDirection: 'row',
    gap: 8,
    marginBottom: 24,
  },
  rememberWidth: {width: 20},
  viewRemember: {position: 'relative', bottom: 2},
  textRemember: {
    fontWeight: '500',
    color: 'black',
    fontSize: 14,
    lineHeight: 20,
  },
  textRemember2: {
    fontWeight: '400',
    color: colors.darkGray,
    fontSize: 14,
    lineHeight: 20,
  },
  belowButton: {marginTop: 31, display: 'flex', alignItems: 'center'},
  blueUnderline: {
    fontFamily: 'Familjen Grotesk',
    color: colors.blue,
    fontWeight: '400',
    fontSize: 16,
    textDecorationLine: 'underline',
  },
});

export default styles;
