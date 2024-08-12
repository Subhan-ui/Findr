import {View, Pressable, Image} from 'react-native';
import useLogin from '../../screens/login/useLogin';
import styles from './GoogleButtonStyles';

const GoogleButton = () => {
  const {onGoogleButtonPress} = useLogin();
  return (
    <View style={styles.wrapperView}>
      <Pressable onPress={() => onGoogleButtonPress()} style={styles.imageView}>
        <Image
          source={require('../../constants/images/icons/images/Google.png')}
          style={styles.image}
        />
      </Pressable>
    </View>
  );
};

export default GoogleButton;
