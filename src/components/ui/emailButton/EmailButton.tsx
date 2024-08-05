import {View, Text, TextInput, StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import {useAppDispatch, useAppSelector} from '../../../store/hooks';
import {
  handleChangeEmail,
  selectEmail,
} from '../../../store/features/loginSlice';
import { colors } from '../../../constants/colors';

const styles = StyleSheet.create({
  nameInput: {
    marginBottom: 6,
    fontWeight: '500',
    color: colors.black,
  },
  InputEmail: {
    borderWidth: 2,
    borderColor: colors.gray,
    paddingLeft: 42,
    paddingRight: 14,
    paddingTop: 10,
    paddingBottom: 10,
    height: 44,
    borderRadius: 8,
  },
  distance: {
    marginTop: 24,
    marginBottom: 24,
    position: 'relative',
  },
  textAddress: {
    fontSize: 14,
    color: colors.darkGray,
  },
});

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
        style={{position: 'absolute', bottom: !hide ? 29 : 12, left: 12}}
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
