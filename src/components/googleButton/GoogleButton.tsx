import {View, ToastAndroid} from 'react-native';
import Link from 'react-native-vector-icons/FontAwesome';
import useLogin from '../../hooks/login/useLogin';

const GoogleButton = () => {
  const {onGoogleButtonPress} = useLogin();
  return (
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
              })
              .catch(error => {
                ToastAndroid.show(error + '', ToastAndroid.LONG);
              })
          }
          name="google"
          size={34}
          color="red"
        />
      </View>
    </View>
  );
};

export default GoogleButton;
