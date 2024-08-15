import {StyleSheet} from 'react-native';
import {colors} from '../../constants/colors/colors';

const styles = StyleSheet.create({
  imageView: {
    display: 'flex',
    width: '100%',
    alignItems: 'flex-end',
  },
  image: {
    height: 128,
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
    fontSize: 64,
    fontWeight: '700',
  },
  secText: {
    fontWeight: '400',
    color: colors.black,
    fontSize: 23,
    fontFamily: 'Familjen Grotesk',
  },
});

export default styles;
