import {View, Modal, Text, Image, TextInput, Pressable} from 'react-native';
import Icon from 'react-native-vector-icons/Entypo';
import useContact from '../../hooks/missingPersonModal/useContact';
import {colors} from '../../constants/colors';
import {personType, modalType} from '../../types/types';

const MissingPersonModal = ({
  modalVisible,
  name,
  age,
  lastSeen,
  location,
  gender,
  photo,
  email,
  handleModal,
}: modalType & personType) => {
  const {
    loading,
    img,
    locations,
    description,
    contactViaEmail,
    handleReportFound,
    handleChange,
  } = useContact(photo, name, age, lastSeen, gender, handleModal);

  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={modalVisible}
      onRequestClose={handleModal}>
      <View
        style={{
          width: '100%',
          backgroundColor: colors.lightBlack,
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
              source={img}
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
              {name}
            </Text>
            <Text
              style={{
                fontFamily: 'Familjen Grotesk',
                fontWeight: '400',
                fontSize: 14,
                lineHeight: 17,
                color: 'black',
              }}>
              {age} {gender}
            </Text>
            <Text
              style={{
                fontFamily: 'Familjen Grotesk',
                fontWeight: '400',
                fontSize: 14,
                lineHeight: 17,
                color: 'black',
              }}>
              Last seen: {lastSeen} IST
            </Text>
            <Text
              style={{
                fontFamily: 'Familjen Grotesk',
                fontWeight: '400',
                fontSize: 14,
                lineHeight: 17,
                color: 'black',
              }}>
              Last seen location: {location}
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
              value={locations}
              onChangeText={text => handleChange('location', text)}
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
              value={description}
              onChangeText={text => handleChange('description', text)}
            />
          </View>
          <View style={{marginTop: 112, marginHorizontal: 16, display: 'flex'}}>
            <Pressable
              style={{
                borderWidth: 1,
                borderColor: colors.blue,
                paddingVertical: 10,
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                borderRadius: 8,
              }}
              onPress={() => contactViaEmail(email)}>
              <Text
                style={{
                  color: colors.blue,
                  fontFamily: 'Montserrat',
                  fontWeight: '700',
                  fontSize: 11,
                }}>
                Contact via Email
              </Text>
            </Pressable>
            <Pressable
              style={{
                backgroundColor: colors.blue,
                paddingVertical: 10,
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                marginTop: 16,
                borderRadius: 8,
              }}
              onPress={() => handleReportFound(email)}
              disabled={loading}>
              <Text
                style={{
                  color: 'white',
                  fontFamily: 'Montserrat',
                  fontWeight: '700',
                  fontSize: 11,
                }}>
                {loading ? 'Reporting...' : 'Report Found'}
              </Text>
            </Pressable>
          </View>
        </View>
      </View>
    </Modal>
  );
};

export default MissingPersonModal;
