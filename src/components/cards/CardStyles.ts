import {StyleSheet} from 'react-native';
import {colors} from '../../constants/colors/colors';

const styles = StyleSheet.create({
  parentView: {
    height: 340,
    width: 213,
    borderRadius: 8,
    marginRight: 16,
  },
  wrapperView: {
    backgroundColor: colors.red,
    height: 44,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    borderTopEndRadius: 8,
    borderTopLeftRadius: 8,
  },
  missingText: {
    color: 'white',
    fontFamily: 'Familjen Grotesk',
    fontSize: 32,
    fontWeight: '400',
  },
  imagePerson: {
    width: 212,
    height: 260,
    zIndex: 100,
    borderBottomLeftRadius: 8,
    borderBottomRightRadius: 8,
  },
  blankImg: {
    width: 212,
    height: 260,
    zIndex: 200,
    position: 'absolute',
    borderBottomLeftRadius: 8,
    borderBottomRightRadius: 8,
  },
  wrapperContent: {
    position: 'absolute',
    bottom: 16,
    left: 16,
    zIndex: 1000,
  },
  white: {color: 'white'},
});

export default styles;
