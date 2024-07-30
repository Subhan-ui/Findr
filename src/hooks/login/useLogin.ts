import {useState, useEffect} from 'react';
import {GoogleSignin} from '@react-native-google-signin/google-signin';
import {useAppSelector} from '../../store/hooks';
import {selectEmail, selectPassword} from '../../store/features/loginSlice';
import auth from '@react-native-firebase/auth';
import {ToastAndroid} from 'react-native';

const useLogin = () => {
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    GoogleSignin.configure({
      webClientId:
        '706268431038-su47dvmsbpu9lmhduibph9v5995lf25o.apps.googleusercontent.com',
    });
  }, []);
  const email = useAppSelector(selectEmail);
  const password = useAppSelector(selectPassword);
  const onEmailSignIn = () => {
    setLoading(true);
    if (email.length > 0 && password.length > 0) {
      auth()
        .signInWithEmailAndPassword(email, password)
        .then(() => {
          ToastAndroid.show('Signed in!', ToastAndroid.LONG);
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
        })
        .finally(() => {
          setLoading(false);
        });
    } else {
      ToastAndroid.show('Enter Email or password correctly', ToastAndroid.LONG);
    }
  };

  async function onGoogleButtonPress() {
    await GoogleSignin.hasPlayServices({showPlayServicesUpdateDialog: true});
    const userInfo = await GoogleSignin.signIn();
    console.log(userInfo);
    const googleCredential = auth.GoogleAuthProvider.credential(
      userInfo.idToken,
    );
    return auth().signInWithCredential(googleCredential);
  }
  return {onGoogleButtonPress, onEmailSignIn, loading};
};

export default useLogin;
