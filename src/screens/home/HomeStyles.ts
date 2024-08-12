import {StyleSheet} from 'react-native';
import {colors} from '../../constants/colors/colors';

const styles = StyleSheet.create({
  logoWrap: {display: 'flex', alignItems: 'center', marginTop: 8},
  imageWrap: {display: 'flex', alignItems: 'center', marginTop: 43},
  barWrap: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginHorizontal: 20,
    marginTop: 27,
    paddingRight: 9,
  },
  heading: {
    fontFamily: 'Familjen Grotesk',
    fontWeight: '400',
    fontSize: 23,
    color: 'black',
  },
  headingUnderline: {
    fontFamily: 'Familjen Grotesk',
    fontWeight: '400',
    fontSize: 16,
    color: colors.darkBlue,
    textDecorationLine: 'underline',
  },
  ScrollHorizon: {
    marginHorizontal: 20,
    display: 'flex',
    flexDirection: 'row',
    marginTop: 12,
    height: 304,
  },
  noPerson: {
    height: 300,
    width: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  noPersonText: {
    color: 'black',
    fontFamily: 'Montserrat',
    fontWeight: '600',
  },
});

export default styles;
