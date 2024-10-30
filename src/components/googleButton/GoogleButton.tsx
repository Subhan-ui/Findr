import {View, Pressable, Image} from 'react-native';

import useLogin from '../../screens/login/useLogin';
import styles from './GoogleButtonStyles';
import { google } from '../../constants/images';

const GoogleButton = () => {
  const {onGoogleButtonPress} = useLogin();
  return (
    <View style={styles.wrapperView}>
      <Pressable onPress={() => onGoogleButtonPress()} style={styles.imageView}>
        <Image
          source={google}
          style={styles.image}
        />
      </Pressable>
    </View>
  );
};

export default GoogleButton;
