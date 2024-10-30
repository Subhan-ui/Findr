import {ToastAndroid} from 'react-native';
import auth from '@react-native-firebase/auth';

import useTypeNavigation from '../../navigation/useTypeNavigation';
import {selectEmail} from '../../store/slices/login.slice';
import {useAppSelector} from '../../store/hooks';

const usePassword = () => {
  const email = useAppSelector(selectEmail);
  const navigation = useTypeNavigation();
  const handleForgotPassword = () => {
    auth()
      .sendPasswordResetEmail(email)
      .then(() => {
        ToastAndroid.show(
          'Password Reset email sent Successfully',
          ToastAndroid.LONG,
        );
        navigation.navigate('Login');
      })
      .catch(error => {
        ToastAndroid.show(error.message, ToastAndroid.LONG);
      });
  };
  return {handleForgotPassword};
};

export default usePassword;
