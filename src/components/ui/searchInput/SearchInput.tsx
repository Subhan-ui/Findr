import {View, TextInput} from 'react-native';
import Icon from 'react-native-vector-icons/EvilIcons';
import {useAppDispatch, useAppSelector} from '../../../store/hooks';
import {
  handleChangeQuery,
  selectQuery,
} from '../../../store/features/missingReportSlice';

const SearchInput = ({marginHorizontal}: {marginHorizontal: number}) => {
  const search = useAppSelector(selectQuery);
  const dispatch = useAppDispatch();
  return (
    <View style={{marginHorizontal: marginHorizontal, marginTop: 26}}>
      <TextInput
        value={search}
        onChangeText={text => dispatch(handleChangeQuery(text))}
        style={{
          borderWidth: 1,
          borderColor: 'gray',
          borderRadius: 8,
          marginVertical: 8,
          height: 36,
          paddingLeft: 16,
          paddingVertical: 11,
        }}
        placeholder="Search"
      />
      <Icon
        name="search"
        size={19}
        color="black"
        style={{position: 'absolute', right: 28, top: 17}}
      />
    </View>
  );
};

export default SearchInput;
