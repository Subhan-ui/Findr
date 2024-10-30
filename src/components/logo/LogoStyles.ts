import {StyleSheet} from 'react-native';

import { scaleFont, wp } from '../../constants/constants';

const styles = StyleSheet.create({
  view: {
    width: wp(50),
    height: 96,
    position: 'relative',
  },
  text: {
    fontFamily: 'Familjen Grotesk',
    fontSize: scaleFont(60),
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
