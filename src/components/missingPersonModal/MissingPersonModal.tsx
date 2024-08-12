import {View, Modal, Text, Image, TextInput, Pressable} from 'react-native';
import Icon from 'react-native-vector-icons/Entypo';
import useContact from './useContact';
import {colors} from '../../constants/colors/colors';
import {personType, modalType} from '../../types/types';
import styles from './MissingPersonModalStyles';

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
    details,
  } = useContact(photo, name, age, lastSeen, gender, handleModal, location);

  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={modalVisible}
      onRequestClose={handleModal}>
      <View style={styles.surrounding}>
        <View style={styles.wrapperView}>
          <Icon
            name="cross"
            size={24}
            color="black"
            style={styles.crossIcon}
            onPress={handleModal}
          />
          <View style={styles.center}>
            <Image source={img} style={styles.image} />
            {details.map(detail => (
              <Text style={styles.text} key={detail.id}>
                {detail.children}
              </Text>
            ))}
          </View>
          <View style={styles.inputsView}>
            <TextInput
              style={styles.inputLocation}
              placeholder="Location"
              placeholderTextColor="black"
              value={locations}
              onChangeText={text => handleChange('location', text)}
            />
            <TextInput
              style={styles.inputDescription}
              multiline={true}
              placeholder="More Description"
              placeholderTextColor="black"
              value={description}
              onChangeText={text => handleChange('description', text)}
            />
          </View>
          <View style={styles.buttonView}>
            <Pressable
              style={styles.buttonEmail}
              onPress={() => contactViaEmail(email)}>
              <Text style={styles.textEmail}>Contact via Email</Text>
            </Pressable>
            <Pressable
              style={styles.buttonReport}
              onPress={() => handleReportFound(email)}
              disabled={loading}>
              <Text style={styles.textReport}>
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
