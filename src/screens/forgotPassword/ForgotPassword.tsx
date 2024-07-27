import {Image, Text, View} from 'react-native';
import EmailButton from '../../components/ui/emailButton/EmailButton';
import Button from '../../components/ui/button/Button';
import TopBar from '../../components/topBar/TopBar';

const ForgotPassword = () => {
  return (
    <View style={{marginHorizontal: 33}}>
      <View
        style={{
          display: 'flex',
          flexDirection: 'row',
          gap: 8,
          alignItems: 'center',
          marginTop: 60,
          marginLeft: 14,
        }}>
        <TopBar text="Forgot Password" />
      </View>
      <View style={{marginTop: 56}}>
        <Image
          source={require('../../assets/icons/images/forgotPassword.png')}
        />
      </View>
      <View style={{marginTop: 34}}>
        <Text
          style={{
            fontFamily: 'Familjen Grotesk',
            fontWeight: '400',
            fontSize: 16,
            textAlign: 'center',
            lineHeight: 19,
            color: '#222526',
          }}>
          Please enter the email address associated with your account. We'll
          send you a verification code to reset your password.
        </Text>
      </View>
      <EmailButton />
      <View style={{marginTop: 10}}>
        <Button>Send Reset Code</Button>
      </View>
    </View>
  );
};

export default ForgotPassword;
