import {
  View,
  Text,
  Image,
  KeyboardAvoidingView,
  ToastAndroid,
} from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';
import Icon1 from 'react-native-vector-icons/Ionicons';
import Icon2 from 'react-native-vector-icons/Feather';
import TextInputs from '../../components/ui/textInput/TextInput';
import EmailButton from '../../components/ui/emailButton/EmailButton';
import Button from '../../components/ui/button/Button';
import useTypeNavigation from '../../hooks/useTypeNavigation';
import {useAppDispatch, useAppSelector} from '../../store/hooks';
import {
  handleChangeName,
  handleUserNull,
  selectName,
  selectUser,
} from '../../store/features/loginSlice';
import auth from '@react-native-firebase/auth';

const EditProfile = () => {
  const navigation = useTypeNavigation();
  const name = useAppSelector(selectName);
  const user = useAppSelector(selectUser)
  const dispatch = useAppDispatch();
  
  const signOut = () => {
    auth()
      .signOut()
      .then(() => {
        ToastAndroid.show('User Signed Out', ToastAndroid.LONG);
        dispatch(handleUserNull())
      });
  };
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
          <Icon1
            onPress={signOut}
            name="exit"
            size={24}
            color="black"
          />
        </View>
        <View style={{marginTop: 16, display: 'flex', alignItems: 'center'}}>
          {user?.photoURL && (
            <Image
              src={user?.photoURL}
              style={{
                width: 125,
                height: 125,
                borderRadius: 62,
                marginTop: 24,
                marginBottom: 16,
              }}
            />
          )} 
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
            <Icon2 name="edit-2" size={14} color="black" />
          </View>
        </View>
        <View style={{marginHorizontal: 34}}>
          <TextInputs
            text="Name"
            value={name}
            onChange={text => dispatch(handleChangeName(text))}
          />
          <EmailButton hide />
        </View>
        <View
          style={{
            marginHorizontal: 33,
            position: 'absolute',
            bottom: 16,
            width: '83%',
          }}>
          <Button>Save Changes </Button>
        </View>
      </KeyboardAvoidingView>
    </>
  );
};

export default EditProfile;
