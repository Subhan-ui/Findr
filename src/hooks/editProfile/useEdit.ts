import {useAppDispatch, useAppSelector} from '../../store/hooks';
import {ToastAndroid} from 'react-native';
import {useState} from 'react';
import auth from '@react-native-firebase/auth';
import {launchImageLibrary} from 'react-native-image-picker';
import {
  handleChangeName,
  handleUserNull,
  selectName,
  selectUser,
} from '../../store/features/loginSlice';

const useEdit = () => {
  const dispatch = useAppDispatch();
  const [photo, setPhoto] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const name = useAppSelector(selectName);
  const user = useAppSelector(selectUser);
  const signOut = () => {
    auth()
      .signOut()
      .then(() => {
        ToastAndroid.show('User Signed Out', ToastAndroid.LONG);
        dispatch(handleUserNull());
      });
  };

  const handleChoosePhoto = async () => {
    try {
      setLoading(true);
      console.log('response');
      // const options = {
      //   storageOptions: {
      //     path: 'image',
      //   },
      // };
      launchImageLibrary({mediaType: 'photo'}, (response: any) => {
        if (response.didCancel) {
          console.log('User cancelled image picker');
        } else if (response.error) {
          console.log('Image picker error: ', response.error);
        } else {
          let imageUri = response.uri || response.assets?.[0]?.uri;
          setPhoto(imageUri);
        }
        console.log(photo);
      });
    } catch (err) {
      console.log(err);
    } finally {
      setLoading(false);
    }
  };
  const handleSaveChanges = () => {
    setLoading(true);
    const updateUserProfile = {
      photoURL: photo,
      displayName: name,
    };
    auth()
      .currentUser?.updateProfile(updateUserProfile)
      .then(() => {
        ToastAndroid.show('User Updated Successfully', ToastAndroid.LONG);
      })
      .catch(err => ToastAndroid.show(err.message, ToastAndroid.LONG))
      .finally(() => {
        setLoading(false);
      });
  };
  const handleChanges = (text: string) => {
    dispatch(handleChangeName(text));
  };
  return {
    name,
    photo,
    handleSaveChanges,
    handleChoosePhoto,
    signOut,
    handleChanges,
    user,
    loading,
  };
};

export default useEdit;
