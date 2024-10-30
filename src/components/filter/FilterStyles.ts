import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  wrapperView: {
    marginTop: 30,
    marginHorizontal: 20,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
  filterText: {
    color: 'black',
    fontFamily: 'Familjen Grotesk',
    fontSize: 14,
    fontWeight: '500',
  },
  row: {display: 'flex', flexDirection: 'row'},
  filterItem: {
    height: 36,
    width: 57,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 16,
  },
  filterItemText: {fontWeight: '500', fontSize: 14, color: 'black'},
  underline: {
    marginTop: 10,
    borderWidth: 0.5,
    borderColor: 'gray',
    width: '100%',
  },
});

export default styles;
