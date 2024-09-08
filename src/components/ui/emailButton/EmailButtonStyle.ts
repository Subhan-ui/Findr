import {StyleSheet} from 'react-native';

import {colors} from '../../../constants/colors/colors';

const styles = StyleSheet.create({
  nameInput: {
    marginBottom: 6,
    fontWeight: '500',
    color: colors.black,
  },
  InputEmail: {
    borderWidth: 2,
    borderColor: colors.gray,
    paddingLeft: 42,
    paddingRight: 14,
    paddingTop: 10,
    paddingBottom: 10,
    height: 44,
    borderRadius: 8,
  },
  distance: {
    marginTop: 24,
    marginBottom: 24,
    position: 'relative',
  },
  textAddress: {
    fontSize: 14,
    color: colors.darkGray,
  },
  icon: {position: 'absolute', left: 12},
});

export default styles;
