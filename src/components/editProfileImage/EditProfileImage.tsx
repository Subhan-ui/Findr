import {Image, View} from 'react-native';
import Icon2 from 'react-native-vector-icons/Feather';
import {imageType} from '../../types/types';
import useHandleImage from '../../hooks/editProfileImage/useHandleImage';

const EditProfileImage = ({photoURL, photo, handleChoosePhoto}: imageType) => {
  const {imageSource} = useHandleImage(photo, photoURL);

  return (
    <>
      <Image
        source={imageSource}
        style={{
          width: 125,
          height: 125,
          borderRadius: 62,
          marginTop: 24,
          marginBottom: 16,
        }}
      />
      <View
        style={{
          width: 30,
          height: 30,
          backgroundColor: 'white',
          borderRadius: 55,
          position: 'relative',
          bottom: 48,
          left: 38,
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          borderWidth: 0.2,
        }}>
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
