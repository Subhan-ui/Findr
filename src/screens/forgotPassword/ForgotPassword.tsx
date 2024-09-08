import {Image, ScrollView, Text, View} from 'react-native';

import styles from './ForgotPasswordStyles';
import usePassword from './useForgotPassword';
import {EmailButton, Button, TopBar} from '../../components';

const ForgotPassword = () => {
  const {handleForgotPassword} = usePassword();
  return (
    <ScrollView style={styles.wrapper}>
      <View style={styles.header}>
        <TopBar text="Forgot Password" />
      </View>
      <View style={styles.imageWrap}>
        <Image
          source={require('../../constants/images/images/forgotPassword.png')}
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
    </ScrollView>
  );
};

export default ForgotPassword;
