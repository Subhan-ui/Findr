import {Image, View} from 'react-native';
import Icon2 from 'react-native-vector-icons/Feather';

import styles from './EditProfileImageStyles';
import useHandleImage from './useEditProfileImage';
import {imageType} from '../../types/types';

const EditProfileImage = ({photoURL, photo, handleChoosePhoto}: imageType) => {
  const {imageSource} = useHandleImage(photo, photoURL);

  return (
    <>
      <Image source={imageSource} style={styles.image} />
      <View style={styles.imageIcon}>
        <Icon2
          name="edit-2"
          size={14}
          color="black"
          onPress={handleChoosePhoto}
        />
      </View>
    </>
  );
};

export default EditProfileImage;
