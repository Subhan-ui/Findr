import {Image, Text, View} from 'react-native';
import usePassword from './usePassword';
import {EmailButton, Button, TopBar} from '../../components';
import styles from './ForgotPasswordStyles';

const ForgotPassword = () => {
  const {handleForgotPassword} = usePassword();
  return (
    <View style={styles.wrapper}>
      <View style={styles.header}>
        <TopBar text="Forgot Password" />
      </View>
      <View style={styles.imageWrap}>
        <Image
          source={require('../../constants/images/icons/images/forgotPassword.png')}
        />
      </View>
      <View style={styles.textWrap}>
        <Text style={styles.text}>
          Please enter the email address associated with your account. We'll
          send you a verification code to reset your password.
        </Text>
      </View>
      <EmailButton />
      <View style={styles.buttonWrap}>
        <Button onPress={() => handleForgotPassword()}>Send Reset Code</Button>
      </View>
    </View>
  );
};

export default ForgotPassword;
