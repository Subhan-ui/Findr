import {View, Text, Pressable, Image} from 'react-native';
import Icon from 'react-native-vector-icons/Fontisto';
import {uploadType} from '../../types/types';
import styles from './UploadPictureStyles';

const UploadPicture = ({handleChoosePhoto, pic, handleDelete}: uploadType) => {
  return (
    <View>
      <Text style={styles.heading}>Upload Photographs</Text>
      {!pic ? (
        <Pressable onPress={handleChoosePhoto} style={styles.wholeButton}>
          <Icon name="cloud-up" size={54} />
          <View style={styles.view}>
            <Text style={styles.textBlack}>Drag & Drop files or</Text>
            <Text style={styles.textBlue}>Browse</Text>
          </View>
          <Text style={styles.smallText}>
            Supported formates: JPEG, PNG, JPG
          </Text>
        </Pressable>
      ) : (
        <Pressable onPress={handleDelete} style={styles.imageButton}>
          <Image source={{uri: pic}} style={styles.image} />
        </Pressable>
      )}
    </View>
  );
};

export default UploadPicture;
