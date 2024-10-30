import {StyleSheet} from 'react-native';
import {height} from '../../constants/constants';

const styles = StyleSheet.create({
  full: {height: height},
  headerWrap: {
    display: 'flex',
    flexDirection: 'row',
    gap: 8,
    alignItems: 'center',
    marginTop: 8,
    marginLeft: 26,
  },
  scroll: {height: '62%'},
});

export default styles;
