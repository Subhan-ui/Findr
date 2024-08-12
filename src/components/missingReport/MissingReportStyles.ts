import {StyleSheet} from 'react-native';
import {colors} from '../../constants/colors/colors';

const styles = StyleSheet.create({
  wrapperView: {marginTop: 40, display: 'flex', flexDirection: 'row'},
  image: {height: 154, width: 115},
  detailWrapper: {marginLeft: 8, marginRight: 20},
  text: {
    fontFamily: 'Familjen Grotesk',
    fontWeight: '400',
    fontSize: 16,
    lineHeight: 24,
    color: 'black',
  },
  button: {
    marginTop: 12,
    backgroundColor: colors.blue,
    borderRadius: 8,
    width: 101,
    height: 24,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText: {color: 'white', fontSize: 11},
});

export default styles;
