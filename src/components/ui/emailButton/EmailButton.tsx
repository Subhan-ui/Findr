import {View, Text, TextInput} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import {useAppDispatch, useAppSelector} from '../../../store/hooks';
import {
  handleChangeEmail,
  selectEmail,
} from '../../../store/features/loginSlice';
import styles from './EmailButtonStyle';

const EmailButton = ({hide}: {hide?: boolean}) => {
  const email = useAppSelector(selectEmail);
  const dispatch = useAppDispatch();
  return (
    <View style={styles.distance}>
      <Text style={styles.nameInput}>Email</Text>
      <TextInput
        value={email}
        onChangeText={text => dispatch(handleChangeEmail(text))}
        inputMode="email"
        style={styles.InputEmail}
      />
      <Icon
        name="mail-outline"
        size={20}
        color="black"
        style={[styles.icon, {bottom: !hide ? 29 : 12}]}
      />
      {!hide && (
        <Text style={styles.textAddress}>
          Your email address is your username
        </Text>
      )}
    </View>
  );
};

export default EmailButton;
