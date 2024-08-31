import {StyleSheet} from 'react-native';
import { scaleFont, wp } from '../../constants/contents';

const styles = StyleSheet.create({
  view: {
    width: wp(50),
    height: 96,
    position: 'relative',
  },
  text: {
    fontFamily: 'Familjen Grotesk',
    fontSize: scaleFont(64),
    fontWeight: '700',
  },
  small: {
    fontFamily: 'Satisfy',
    fontWeight: '400',
    position: 'absolute',
    left: 80,
    top: 65,
  },
});

export default styles;
