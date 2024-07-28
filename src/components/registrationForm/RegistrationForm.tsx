import {useState} from 'react';
import {
  Pressable,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  ToastAndroid,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import Icon1 from 'react-native-vector-icons/MaterialCommunityIcons';
import Button from '../ui/button/Button';
import EmailButton from '../ui/emailButton/EmailButton';
import PasswordInput from '../ui/passwordInput/PasswordInput';
import useTypeNavigation from '../../hooks/useTypeNavigation';
import TextInputs from '../ui/textInput/TextInput';
import {useAppDispatch, useAppSelector} from '../../store/hooks';
import auth from '@react-native-firebase/auth';
import {
  selectEmail,
  selectName,
  selectPassword,
  handleChangeName,
} from '../../store/features/loginSlice';

const styles = StyleSheet.create({
  safeArea: {
    display: 'flex',
    justifyContent: 'center',
    marginLeft: 34,
    marginRight: 34,
  },
  nameInput: {
    marginBottom: 6,
    fontWeight: '500',
    color: '#121212',
  },
  Input: {
    borderWidth: 2,
    borderColor: '#d0d5dd',
    paddingLeft: 14,
    paddingRight: 14,
    paddingTop: 10,
    paddingBottom: 10,
    height: 44,
    borderRadius: 8,
  },
});

const RegistrationForm = () => {
  const [clicked, setClicked] = useState(false);
  const onPressFunction = () => {
    setClicked(prev => !prev);
  };
  const name = useAppSelector(selectName);
  const dispatch = useAppDispatch();
  const navigation = useTypeNavigation();
  const email = useAppSelector(selectEmail);
  const password = useAppSelector(selectPassword);
  const onEmailSignUp = () => {
    if (email.length > 0 && password.length > 0 && name.length > 0) {
      auth()
        .createUserWithEmailAndPassword(email, password)
        .then(() => {
          ToastAndroid.show(
            'User account created & signed in!',
            ToastAndroid.LONG,
          );
          navigation.navigate('Home');
        })
        .catch(error => {
          if (error.code === 'auth/email-already-in-use') {
            ToastAndroid.show(
              'That email address is already in use!',
              ToastAndroid.LONG,
            );
          }

          if (error.code === 'auth/invalid-email') {
            ToastAndroid.show(
              'That email address is invalid!',
              ToastAndroid.LONG,
            );
          }

          ToastAndroid.show(error.message, ToastAndroid.LONG);
        });
    } else {
      ToastAndroid.show('Enter Email or password correctly', ToastAndroid.LONG);
    }
  };
  return (
    <SafeAreaView style={styles.safeArea}>
      <TextInputs
        text="Name"
        value={name}
        onChange={text => dispatch(handleChangeName(text))}
      />
      <EmailButton />
      <PasswordInput />
      <View
        style={{
          marginTop: 26,
          display: 'flex',
          flexDirection: 'row',
          gap: 8,
          marginBottom: 24,
        }}>
        <Pressable onPress={onPressFunction} style={{width: 20}}>
          {clicked ? (
            <Icon name="checkbox-outline" size={16} color="black" />
          ) : (
            <Icon1 name="checkbox-blank-outline" size={16} color="black" />
          )}
        </Pressable>
        <View style={{position: 'relative', bottom: 2}}>
          <Text
            style={{
              fontWeight: '500',
              color: 'black',
              fontSize: 14,
              lineHeight: 20,
            }}>
            Remember Me
          </Text>
          <Text
            style={{
              fontWeight: '400',
              color: '#667085',
              fontSize: 14,
              lineHeight: 20,
            }}>
            Save my login details for next time
          </Text>
        </View>
      </View>
      <Button onPress={() => onEmailSignUp()}>Next</Button>
      <View style={{marginTop: 31, display: 'flex', alignItems: 'center'}}>
        <Text
          style={{
            fontFamily: 'Familjen Grotesk',
            color: '#5b59fe',
            fontWeight: '400',
            fontSize: 16,
            textDecorationLine: 'underline',
          }}>
          Need Help or Have Questions?
        </Text>
      </View>
    </SafeAreaView>
  );
};

export default RegistrationForm;
