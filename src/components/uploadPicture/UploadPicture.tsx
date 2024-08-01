import {View, Text, Pressable, Image} from 'react-native';
import Icon from 'react-native-vector-icons/Fontisto';
import { colors } from '../../constants/colors';

const UploadPicture = ({
  handleChoosePhoto,
  pic,
  handleDelete,
}: {
  handleChoosePhoto: () => void;
  pic: string | null;
  handleDelete: () => void;
}) => {
  return (
    <View>
      <Text
        style={{
          fontFamily: 'Familjen Grotesk',
          fontSize: 23,
          fontWeight: '400',
          color: 'black',
          marginTop: 36,
        }}>
        Upload Photographs
      </Text>
      {!pic ? (
        <Pressable
          onPress={handleChoosePhoto}
          style={{
            borderWidth: 2,
            borderStyle: 'dashed',
            borderColor: colors.blue,
            width: '100%',
            height: 173,
            borderRadius: 6,
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Icon name="cloud-up" size={54} />
          <View style={{display: 'flex', flexDirection: 'row'}}>
            <Text
              style={{
                fontFamily: 'Familjen Grotesk',
                fontSize: 16,
                fontWeight: '400',
                color: 'black',
              }}>
              Drag & Drop files or{' '}
            </Text>
            <Text
              style={{
                fontFamily: 'Familjen Grotesk',
                fontSize: 16,
                fontWeight: '400',
                color: colors.blue,
              }}>
              Browse
            </Text>
          </View>
          <Text
            style={{
              fontFamily: 'Familjen Grotesk',
              fontSize: 11,
              fontWeight: '400',
              color: 'black',
            }}>
            Supported formates: JPEG, PNG, JPG
          </Text>
        </Pressable>
      ) : (
        <Pressable
          onPress={handleDelete}
          style={{
            width: '100%',
            display: 'flex',
            alignItems: 'center',
            marginTop: 4,
          }}>
          <Image
            source={{uri: pic}}
            style={{height: 154, width: 115, borderRadius: 4}}
          />
        </Pressable>
      )}
    </View>
  );
};

export default UploadPicture;
