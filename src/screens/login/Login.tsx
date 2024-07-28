import {Image, Text, ToastAndroid, View} from 'react-native';
import Logo from '../../components/logo/Logo';
import EmailButton from '../../components/ui/emailButton/EmailButton';
import PasswordInput from '../../components/ui/passwordInput/PasswordInput';
import Button from '../../components/ui/button/Button';
import Link from 'react-native-vector-icons/FontAwesome';
import useTypeNavigation from '../../hooks/useTypeNavigation';
import {GoogleSignin} from '@react-native-google-signin/google-signin';
import auth from '@react-native-firebase/auth';
import {useEffect} from 'react';
import {useAppSelector} from '../../store/hooks';
import {selectEmail, selectPassword} from '../../store/features/loginSlice';

const Login = () => {
  const navigation = useTypeNavigation();
  useEffect(() => {
    GoogleSignin.configure({
      webClientId:
        '706268431038-su47dvmsbpu9lmhduibph9v5995lf25o.apps.googleusercontent.com',
    });
  }, []);
  const email = useAppSelector(selectEmail);
  const password = useAppSelector(selectPassword);
  const onEmailSignIn = () => {
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

  return (
    <>
      <View
        style={{
          marginTop: 55,
          marginLeft: 34,
          marginRight: 34,
          height: 812,
        }}>
        <View
          style={{
            display: 'flex',
            alignItems: 'center',
          }}>
          <Logo color="#5b59fe" />
        </View>
        <Text
          style={{
            fontFamily: 'Familjen Grotesk',
            fontWeight: '700',
            fontSize: 45,
            color: 'black',
            marginTop: 24,
          }}>
          Welcome Back
        </Text>
        <EmailButton />
        <PasswordInput />
        <View style={{marginTop: 34}}>
          <Button onPress={() => onEmailSignIn()}>Log in</Button>
        </View>
        <View
          style={{
            display: 'flex',
            flexDirection: 'row',
            gap: 10,
            justifyContent: 'center',
            marginTop: 21,
          }}>
          <Text
            onPress={() => navigation.navigate('ForgotPassword')}
            style={{
              fontFamily: 'Familjen Grotesk',
              fontSize: 11,
              fontWeight: '400',
              color: 'black',
              lineHeight: 13,
            }}>
            Forget your password
          </Text>
          <Text
            style={{
              fontFamily: 'Familjen Grotesk',
              fontSize: 11,
              fontWeight: '400',
              color: 'black',
              lineHeight: 13,
            }}>
            |
          </Text>
          <Text
            style={{
              fontFamily: 'Familjen Grotesk',
              fontSize: 11,
              fontWeight: '400',
              color: 'black',
              lineHeight: 13,
            }}
            onPress={() => navigation.navigate('Register')}>
            Register for an account
          </Text>
        </View>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            marginVertical: 16,
            marginTop: 28,
          }}>
          <View style={{flex: 1, height: 1, backgroundColor: '#d0d2d7'}} />
          <Text
            style={{
              marginHorizontal: 29,
              color: '#000',
              fontFamily: 'Familjen Grotesk',
              fontSize: 16,
            }}>
            or
          </Text>
          <View style={{flex: 1, height: 1, backgroundColor: '#d0d2d7'}} />
        </View>
        <View style={{display: 'flex', alignItems: 'center', marginTop: 27}}>
          <View
            style={{
              borderWidth: 1,
              borderColor: '#0802A3',
              height: 57,
              width: 60,
              borderRadius: 12,
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Link
              onPress={() =>
                onGoogleButtonPress()
                  .then(() => {
                    ToastAndroid.show('User Singed in', ToastAndroid.LONG);
                    // navigation.navigate('Home');
                  })
                  .catch(error => {
                    console.log(error);
                    ToastAndroid.show(error + '', ToastAndroid.LONG);
                  })
              }
              name="google"
              size={34}
              color="red"
            />
          </View>
        </View>
        <View
          style={{
            position: 'absolute',
            bottom: 50,
            left: 0,
            right: 0,
            alignItems: 'center',
          }}>
          <Image source={require('../../assets/icons/patterns/login.png')} />
        </View>
      </View>
    </>
  );
};

export default Login;
