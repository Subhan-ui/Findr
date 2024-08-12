import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  wrapper: {height: 812},
  headerView: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 12,
    marginHorizontal: 26,
    alignItems: 'center',
  },
  headerText: {
    fontFamily: 'Familjen Grotesk',
    color: 'black',
    fontWeight: '700',
    fontSize: 24,
  },
  imageWRapper: {marginTop: 16, display: 'flex', alignItems: 'center'},
  inputWrapper: {marginHorizontal: 34},
  buttonWrapper: {
    marginHorizontal: 33,
    position: 'absolute',
    bottom: 16,
    width: '83%',
  },
});

export default styles;
