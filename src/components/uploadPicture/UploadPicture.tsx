import {View, Text} from 'react-native';
import Icon from 'react-native-vector-icons/Fontisto';

const UploadPicture = () => {
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
      <View
        style={{
          borderWidth: 2,
          borderStyle: 'dashed',
          borderColor: '#5b59fe',
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
              color: '#5b59fe',
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
      </View>
    </View>
  );
};

export default UploadPicture;
