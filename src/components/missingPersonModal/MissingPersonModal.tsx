import {View, Modal, Text, Image, TextInput, Pressable} from 'react-native';
import Icon from 'react-native-vector-icons/Entypo';
import Button from '../ui/button/Button';

const MissingPersonModal = ({
  modalVisible,
  handleModal,
}: {
  modalVisible: boolean;
  handleModal: () => void;
}) => {
  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={modalVisible}
      onRequestClose={handleModal}>
      <View
        style={{
          width: '100%',
          backgroundColor: 'rgba(0,0,0,0.67)',
          height: '100%',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <View
          style={{
            width: '80%',
            height: 591,
            backgroundColor: 'white',
            borderRadius: 8,
          }}>
          <Icon
            name="cross"
            size={24}
            color="black"
            style={{position: 'absolute', right: 10, top: 10}}
            onPress={handleModal}
          />
          <View style={{display: 'flex', alignItems: 'center'}}>
            <Image
              source={require('../../assets/icons/images/person.png')}
              style={{
                width: 100,
                height: 100,
                borderRadius: 50,
                marginTop: 24,
                marginBottom: 16,
              }}
            />
            <Text
              style={{
                fontFamily: 'Familjen Grotesk',
                fontWeight: '400',
                fontSize: 14,
                lineHeight: 17,
                color: 'black',
              }}>
              John Doe
            </Text>
            <Text
              style={{
                fontFamily: 'Familjen Grotesk',
                fontWeight: '400',
                fontSize: 14,
                lineHeight: 17,
                color: 'black',
              }}>
              25YearsOldMale
            </Text>
            <Text
              style={{
                fontFamily: 'Familjen Grotesk',
                fontWeight: '400',
                fontSize: 14,
                lineHeight: 17,
                color: 'black',
              }}>
              Last seen: time
            </Text>
            <Text
              style={{
                fontFamily: 'Familjen Grotesk',
                fontWeight: '400',
                fontSize: 14,
                lineHeight: 17,
                color: 'black',
              }}>
              Last seen location: location
            </Text>
          </View>
          <View style={{marginTop: 16}}>
            <TextInput
              style={{
                marginHorizontal: 16,
                borderWidth: 1,
                borderColor: 'black',
                height: 29,
                fontSize: 11,
                padding: 8,
                borderRadius: 8,
              }}
              placeholder="Location"
              placeholderTextColor="black"
            />
            <TextInput
              style={{
                borderWidth: 1,
                borderColor: 'black',
                marginHorizontal: 16,
                borderRadius: 8,
                marginTop: 16,
                padding: 8,
                height: 100,
                fontSize: 11,
              }}
              multiline={true}
              placeholder="More Description"
              placeholderTextColor="black"
            />
          </View>
          <View style={{marginTop: 112, marginHorizontal: 16, display: 'flex'}}>
            <Pressable
              style={{
                borderWidth: 1,
                borderColor: '#5b59fe',
                paddingVertical: 10,
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                borderRadius: 8,
              }}>
              <Text
                style={{
                  color: '#5b59fe',
                  fontFamily: 'Montserrat',
                  fontWeight: '500',
                }}>
                Contact via Email
              </Text>
            </Pressable>
            <Pressable
              style={{
                backgroundColor: '#5b59fe',
                paddingVertical: 10,
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                marginTop: 16,
                borderRadius: 8,
              }}>
              <Text
                style={{
                  color: 'white',
                  fontFamily: 'Montserrat',
                  fontWeight: '500',
                }}>
                Report Found
              </Text>
            </Pressable>
          </View>
        </View>
      </View>
    </Modal>
  );
};

export default MissingPersonModal;
