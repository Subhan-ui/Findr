import {StyleSheet} from 'react-native';

import {colors} from '../../../constants/colors/colors';

const styles = StyleSheet.create({
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
  textAddress: {
    fontSize: 14,
    color: colors.darkGray,
  },
});

export default styles;
