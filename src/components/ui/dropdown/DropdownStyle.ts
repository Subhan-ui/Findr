import {StyleSheet} from 'react-native';

import {colors} from '../../../constants/colors/colors';

const styles = StyleSheet.create({
  container: {
    marginTop: 16,
  },
  text: {fontWeight: '500', fontSize: 14, color: 'black'},
  dropdown: {
    paddingLeft: 14,
    paddingRight: 14,
    paddingTop: 10,
    paddingBottom: 10,
    height: 44,
    backgroundColor: 'white',
    borderWidth: 2,
    borderColor: colors.gray,
    borderRadius: 8,
  },
  dropdownText: {
    fontSize: 16,
  },
  optionsContainer: {
    position: 'absolute',
    width: '100%',
    zIndex: 5000,
    top: 65,
    marginTop: 5,
    borderWidth: 1,
    borderColor: colors.some,
    borderRadius: 5,
    backgroundColor: 'white',
    overflow: 'hidden',
  },
  option: {
    padding: 15,
    borderBottomWidth: 1,
    borderBottomColor: colors.some,
  },
  optionText: {
    fontSize: 16,
  },
});

export default styles;
