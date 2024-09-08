import {View, Text, KeyboardAvoidingView} from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';
import Icon1 from 'react-native-vector-icons/Ionicons';

import styles from './EditProfileStyles';
import useTypeNavigation from '../../navigation/useTypeNavigation';
import useEdit from './useEditProfile';
import {
  TextInputs,
  Button,
  EmailButton,
  EditProfileImage,
} from '../../components';

const EditProfile = () => {
  const navigation = useTypeNavigation();
  const {
    name,
    photo,
    user,
    loading,
    handleSaveChanges,
    handleChoosePhoto,
    signOut,
    handleChanges,
  } = useEdit();

  return (
    <>
      <KeyboardAvoidingView style={styles.wrapper}>
        <View style={styles.headerView}>
          <Icon
            onPress={() => navigation.goBack()}
            name="arrowleft"
            size={24}
            color="black"
          />
          <Text style={styles.headerText}>Edit Profile</Text>
          <Icon1 onPress={signOut} name="exit" size={24} color="black" />
        </View>
        <View style={styles.imageWRapper}>
          <EditProfileImage
            handleChoosePhoto={handleChoosePhoto}
            photoURL={user?.photoURL}
            photo={photo}
          />
        </View>
        <View style={styles.inputWrapper}>
          <TextInputs text="Name" value={name} onChange={handleChanges} />
          <EmailButton hide />
        </View>
        <View style={styles.buttonWrapper}>
          <Button loading={loading} onPress={handleSaveChanges}>
            {loading ? 'Saving...' : 'Save Changes'}
          </Button>
        </View>
      </KeyboardAvoidingView>
    </>
  );
};

export default EditProfile;
