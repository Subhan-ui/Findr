import {useState} from 'react';
import {useAppSelector, useAppDispatch} from '../../store/hooks';
import {
  selectName,
  selectEmail,
  selectPassword,
  handleChangeName,
} from '../../store/features/loginSlice';
import {ToastAndroid} from 'react-native';
import useTypeNavigation from '../../navigation/useTypeNavigation';
import auth from '@react-native-firebase/auth';

const useRegister = () => {
  const navigation = useTypeNavigation();
  const [clicked, setClicked] = useState(false);
  const dispatch = useAppDispatch();
  const onPressFunction = () => {
    setClicked(prev => !prev);
  };
  const name = useAppSelector(selectName);
  const [loading, setLoading] = useState(false);
  const email = useAppSelector(selectEmail);
  const password = useAppSelector(selectPassword);
  const onEmailSignUp = () => {
    setLoading(true);
    if (email.length > 0 && password.length > 0 && name.length > 0) {
      auth()
        .createUserWithEmailAndPassword(email, password)
        .then(() => {
          const updateName = {
            displayName: name,
          };
          auth().currentUser?.updateProfile(updateName);
          ToastAndroid.show(
            'User account created & signed in!',
            ToastAndroid.LONG,
          );
          navigation.navigate('Home');
        })
        .catch(error => {
          if (error?.code === 'auth/email-already-in-use') {
            ToastAndroid.show(
              'That email address is already in use!',
              ToastAndroid.LONG,
            );
          }

          if (error?.code === 'auth/invalid-email') {
            ToastAndroid.show(
              'That email address is invalid!',
              ToastAndroid.LONG,
            );
          }

          ToastAndroid.show(error.message, ToastAndroid.LONG);
        })
        .finally(() => {
          setLoading(false);
        });
    } else {
      ToastAndroid.show('Enter Email or password correctly', ToastAndroid.LONG);
    }
  };
  const handleChanges = (text: string) => {
    dispatch(handleChangeName(text));
  };
  return {
    clicked,
    name,
    loading,
    onEmailSignUp,
    onPressFunction,
    handleChanges,
  };
};

export default useRegister;
