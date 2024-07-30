import {View, Text, KeyboardAvoidingView} from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';
import Icon1 from 'react-native-vector-icons/Ionicons';
import TextInputs from '../../components/ui/textInput/TextInput';
import EmailButton from '../../components/ui/emailButton/EmailButton';
import Button from '../../components/ui/button/Button';
import useTypeNavigation from '../../hooks/useTypeNavigation';
import EditProfileImage from '../../components/editProfileImage/EditProfileImage';
import useEdit from '../../hooks/editProfile/useEdit';

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
      <KeyboardAvoidingView style={{height: 812}}>
        <View
          style={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-between',
            marginTop: 12,
            marginHorizontal: 26,
            alignItems: 'center',
          }}>
          <Icon
            onPress={() => navigation.goBack()}
            name="arrowleft"
            size={24}
            color="black"
          />
          <Text
            style={{
              fontFamily: 'Familjen Grotesk',
              color: 'black',
              fontWeight: '700',
              fontSize: 24,
            }}>
            Edit Profile
          </Text>
          <Icon1 onPress={signOut} name="exit" size={24} color="black" />
        </View>
        <View style={{marginTop: 16, display: 'flex', alignItems: 'center'}}>
          <EditProfileImage
            handleChoosePhoto={handleChoosePhoto}
            photoURL={user?.photoURL}
            photo={photo}
          />
        </View>
        <View style={{marginHorizontal: 34}}>
          <TextInputs text="Name" value={name} onChange={handleChanges} />
          <EmailButton hide />
        </View>
        <View
          style={{
            marginHorizontal: 33,
            position: 'absolute',
            bottom: 16,
            width: '83%',
          }}>
          <Button loading={loading} onPress={handleSaveChanges}>
            {loading ? 'Saving...' : 'Save Changes'}
          </Button>
        </View>
      </KeyboardAvoidingView>
    </>
  );
};

export default EditProfile;
