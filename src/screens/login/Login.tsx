import {Image, ScrollView, Text, View} from 'react-native';
import useTypeNavigation from '../../navigation/useTypeNavigation';
import useLogin from './useLogin';
import {
  Logo,
  EmailButton,
  PasswordInput,
  Button,
  GoogleButton,
} from '../../components';
import {colors} from '../../constants/colors/colors';
import styles from './LoginStyles';

const Login = () => {
  const navigation = useTypeNavigation();
  const {onEmailSignIn, loading} = useLogin();

  return (
    <View style={styles.wrapper}>
      <View style={styles.content}>
        <View style={styles.logoWrap}>
          <Logo color={colors.blue} />
        </View>
        <Text style={styles.heading}>Welcome Back</Text>
        <EmailButton />
        <PasswordInput />
        <View style={styles.buttonWrap}>
          <Button onPress={() => onEmailSignIn()} loading={loading}>
            {loading ? 'logging in...' : 'Log in'}
          </Button>
        </View>
        <View style={styles.options}>
          <Text
            onPress={() => navigation.navigate('ForgotPassword')}
            style={styles.optionsText}>
            Forget your password
          </Text>
          <Text style={styles.optionsText}>|</Text>
          <Text
            style={styles.optionsText}
            onPress={() => navigation.navigate('Register')}>
            Register for an account
          </Text>
        </View>
        <View style={styles.or}>
          <View style={styles.orLine} />
          <Text style={styles.textOr}>or</Text>
          <View style={styles.orLine} />
        </View>
        <GoogleButton />
        <View style={styles.footer}>
          <Image
            source={require('../../constants/images/patterns/login.png')}
          />
        </View>
      </View>
    </View>
  );
};

export default Login;
