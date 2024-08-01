import {View, Text, TextInput, StyleSheet} from 'react-native';
import {useAppDispatch, useAppSelector} from '../../../store/hooks';
import {
  handleChangePassword,
  selectPassword,
} from '../../../store/features/loginSlice';
import { colors } from '../../../constants/colors';

const styles = StyleSheet.create({
  nameInput: {
    marginBottom: 6,
    fontWeight: '500',
    color: '#121212',
  },
  Input: {
    borderWidth: 2,
    borderColor: colors.gray,
    paddingLeft: 14,
    paddingRight: 14,
    paddingTop: 10,
    paddingBottom: 10,
    height: 44,
    borderRadius: 8,
  },
  textAddress: {
    fontSize: 14,
    color: '#667085',
  },
});

const PasswordInput = () => {
  const password = useAppSelector(selectPassword);
  const dispatch = useAppDispatch();
  return (
    <View>
      <Text style={styles.nameInput}>Password</Text>
      <TextInput
        value={password}
        onChangeText={text => dispatch(handleChangePassword(text))}
        style={styles.Input}
        secureTextEntry
      />
      <Text style={styles.textAddress}>
        Your password must be 8 characters.
      </Text>
    </View>
  );
};

export default PasswordInput;
