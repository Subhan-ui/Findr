import {Image, Text, View} from 'react-native';
import useTypeNavigation from '../../hooks/useTypeNavigation';
import useLogin from '../../hooks/login/useLogin';
import {
  Logo,
  EmailButton,
  PasswordInput,
  Button,
  GoogleButton,
} from '../../components';
import { colors } from '../../constants/colors';

const Login = () => {
  const navigation = useTypeNavigation();
  const {onEmailSignIn, loading} = useLogin();

  return (
    <>
      <View
        style={{
          marginTop: 55,
          marginLeft: 34,
          marginRight: 34,
          height: '100%',
        }}>
        <View
          style={{
            display: 'flex',
            alignItems: 'center',
          }}>
          <Logo color={colors.blue} />
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
          <Button onPress={() => onEmailSignIn()} loading={loading}>
            {loading ? 'logging in...' : 'Log in'}
          </Button>
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
        <GoogleButton />
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
