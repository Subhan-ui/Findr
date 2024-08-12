import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  wrapper: {
    marginTop: 55,
    marginLeft: 34,
    marginRight: 34,
    height: '100%',
  },
  logoWrap: {
    display: 'flex',
    alignItems: 'center',
  },
  heading: {
    fontFamily: 'Familjen Grotesk',
    fontWeight: '700',
    fontSize: 45,
    color: 'black',
    marginTop: 24,
  },
  buttonWrap: {marginTop: 34},
  options: {
    display: 'flex',
    flexDirection: 'row',
    gap: 10,
    justifyContent: 'center',
    marginTop: 21,
  },
  optionsText: {
    fontFamily: 'Familjen Grotesk',
    fontSize: 11,
    fontWeight: '400',
    color: 'black',
    lineHeight: 13,
  },
  or: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 16,
    marginTop: 28,
  },
  orLine: {flex: 1, height: 1, backgroundColor: '#d0d2d7'},
  footer: {
    position: 'absolute',
    bottom: 50,
    left: 0,
    right: 0,
    alignItems: 'center',
  },
});

export default styles;
