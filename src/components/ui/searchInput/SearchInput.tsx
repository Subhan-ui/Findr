import {View, TextInput} from 'react-native';
import Icon from 'react-native-vector-icons/EvilIcons';
import {useAppDispatch, useAppSelector} from '../../../store/hooks';
import {
  handleChangeQuery,
  selectQuery,
} from '../../../store/features/missingReportSlice';
import styles from './SearchInputStyles';

const SearchInput = ({marginHorizontal}: {marginHorizontal: number}) => {
  const search = useAppSelector(selectQuery);
  const dispatch = useAppDispatch();
  return (
    <View style={{marginHorizontal: marginHorizontal, marginTop: 26}}>
      <TextInput
        value={search}
        onChangeText={text => dispatch(handleChangeQuery(text))}
        style={styles.textInput}
        placeholder="Search"
      />
      <Icon name="search" size={19} color="black" style={styles.icon} />
    </View>
  );
};

export default SearchInput;
