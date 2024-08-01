import {ToastAndroid} from 'react-native';
import useTypeNavigation from '../useTypeNavigation';
import {selectEmail} from '../../store/features/loginSlice';
import {useAppSelector} from '../../store/hooks';
import auth from '@react-native-firebase/auth';

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
