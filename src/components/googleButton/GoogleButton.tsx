import {View, ToastAndroid, Pressable, Image} from 'react-native';
import useLogin from '../../hooks/login/useLogin';
import {colors} from '../../constants/colors';

const GoogleButton = () => {
  const {onGoogleButtonPress} = useLogin();
  return (
    <View style={{display: 'flex', alignItems: 'center', marginTop: 27}}>
      <Pressable
        onPress={() =>
          onGoogleButtonPress()
            .then(() => {
              ToastAndroid.show('User Singed in', ToastAndroid.LONG);
            })
            .catch(error => {
              ToastAndroid.show(error + '', ToastAndroid.LONG);
            })
        }
        style={{
          borderWidth: 1,
          borderColor: colors.darkBlue,
          height: 57,
          width: 60,
          borderRadius: 12,
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <Image
          source={require('../../assets/icons/images/Google.png')}
          style={{height: 34, width: 34}}
        />
      </Pressable>
    </View>
  );
};

export default GoogleButton;
