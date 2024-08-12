import {StyleSheet} from 'react-native';
import {colors} from '../../constants/colors/colors';

const styles = StyleSheet.create({
  heading: {
    fontFamily: 'Familjen Grotesk',
    fontSize: 23,
    fontWeight: '400',
    color: 'black',
    marginTop: 36,
  },
  wholeButton: {
    borderWidth: 2,
    borderStyle: 'dashed',
    borderColor: colors.blue,
    width: '100%',
    height: 173,
    borderRadius: 6,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  view: {display: 'flex', flexDirection: 'row', gap: 2, },
  textBlack: {
    fontFamily: 'Familjen Grotesk',
    fontSize: 16,
    fontWeight: '400',
    color: 'black',
  }, 
  textBlue: {
    fontFamily: 'Familjen Grotesk',
    fontSize: 16,
    fontWeight: '400',
    color: colors.blue,
  }, 
  smallText: {
    fontFamily: 'Familjen Grotesk',
    fontSize: 11,
    fontWeight: '400',
    color: 'black',
  },
  imageButton: {
    width: '100%',
    display: 'flex',
    alignItems: 'center',
    marginTop: 4,
  },
  image: {height: 154, width: 115, borderRadius: 4}
});

export default styles;
