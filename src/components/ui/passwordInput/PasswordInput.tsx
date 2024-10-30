import {View, Text, TextInput} from 'react-native';

import styles from './PasswordInputStyle';
import {useAppDispatch, useAppSelector} from '../../../store/hooks';
import {
  handleChangePassword,
  selectPassword,
} from '../../../store/slices/login.slice';

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
