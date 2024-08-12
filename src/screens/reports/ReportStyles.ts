import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  wrap: {marginHorizontal: 20},
  barWrap: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 18,
    gap: 8,
  },
  noReport: {
    width: '100%',
    height: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  footerWrap: {
    position: 'absolute',
    bottom: 1,
    display: 'flex',
    alignItems: 'center',
    width: '100%',
  },
});

export default styles;
