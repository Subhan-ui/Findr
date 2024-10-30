import {ToastAndroid} from 'react-native';
import {
  ImagePickerResponse,
  launchImageLibrary,
} from 'react-native-image-picker';
import {
  handleChange,
  handleStateNull,
  selectDate,
  selectDateOfBirth,
  selectEyeColor,
  selectFullName,
  selectGender,
  selectHairColor,
  selectHeight,
  selectLength,
  selectLocation,
  selectNickname,
  selectWeight,
} from '../../store/slices/missingReport.slice';
import {useAppDispatch, useAppSelector} from '../../store/hooks';
import {useState} from 'react';
import useTypeNavigation from '../../navigation/useTypeNavigation';
import {selectUser} from '../../store/slices/login.slice';
import firestore from '@react-native-firebase/firestore';
import storage from '@react-native-firebase/storage';

const useMissingReport = () => {
  const name = useAppSelector(selectFullName);
  const gender = useAppSelector(selectGender);
  const dateOfBirth = useAppSelector(selectDateOfBirth);
  const nickname = useAppSelector(selectNickname);
  const height = useAppSelector(selectHeight);
  const weight = useAppSelector(selectWeight);
  const eyeColor = useAppSelector(selectEyeColor);
  const hairColor = useAppSelector(selectHairColor);
  const length = useAppSelector(selectLength);
  const user = useAppSelector(selectUser);
  const location = useAppSelector(selectLocation);
  const email = user?.email;
  const navigation = useTypeNavigation();
  const dispatch = useAppDispatch();
  const [loading, setLoading] = useState(false);
  const [photo, setPhoto] = useState<string | null>(null);
  const date = useAppSelector(selectDate);
  const [namepic, setName] = useState<string | null>(null);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const genderOptions = ['Male', 'Female', 'Rather not to say'];

  const handleSelectGender = (some: string) => {
    handleChangeValues({name: 'gender', value: some});
    setIsDropdownOpen(false);
  };

  const uploadImage = async () => {
    if (namepic && photo) {
      const reference = storage().ref(namepic);
      const pathToFile = photo;
      await reference.putFile(pathToFile);
    }
  };

  const handleSubmitReport = async () => {
    const condition =
      name.length > 0 &&
      gender.length > 0 &&
      dateOfBirth.length > 0 &&
      nickname.length > 0 &&
      height.length > 0 &&
      weight.length > 0 &&
      eyeColor.length > 0 &&
      hairColor.length > 0 &&
      length.length > 0;
    if (condition) {
      setLoading(true);
      let url = null;
      if (namepic && photo) {
        await uploadImage();
        url = await storage().ref(namepic).getDownloadURL();
      }

      const data = {
        name,
        gender,
        dateOfBirth,
        nickname,
        height,
        weight,
        eyeColor,
        hairColor,
        length,
        email,
        date,
        location,
        photo: url,
        postedDate: new Date().toLocaleString(),
      };

      firestore()
        .collection('Reports')
        .add(data)
        .then(() => {
          ToastAndroid.show('Report Submitted Successfully', ToastAndroid.LONG);
          dispatch(handleStateNull());
          setPhoto(null);
          navigation.reset({
            index: 0,
            routes: [{name: 'Home'}],
          });
        })
        .catch(err => {
          ToastAndroid.show(err?.message, ToastAndroid.LONG);
        })
        .finally(() => {
          setLoading(false);
        });
    } else {
      ToastAndroid.show('all fields are necessary', ToastAndroid.LONG);
    }
  };

  const handleChoosePhoto = async () => {
    try {
      setLoading(true);
      launchImageLibrary(
        {mediaType: 'photo'},
        (response: ImagePickerResponse) => {
          if (response?.didCancel) {
            ToastAndroid.show('User cancelled image picker', ToastAndroid.LONG);
          } else if (response?.errorMessage) {
            ToastAndroid.show(
              `Image picker error: ${response?.errorMessage}`,
              ToastAndroid.LONG,
            );
          } else {
            let imageUri = response?.assets?.[0]?.uri;
            let imageName = response?.assets?.[0]?.fileName;
            if (imageUri && imageName) {
              setPhoto(imageUri);
              setName(imageName);
            }
          }
        },
      );
    } catch (err) {
      ToastAndroid.show('Some error occured', ToastAndroid.LONG);
    } finally {
      setLoading(false);
    }
  };
  const handleDeletePhoto = () => {
    setPhoto(null);
  };
  const handleChangeValues = ({name, value}: {name: string; value: string}) => {
    dispatch(handleChange({name, value}));
  };

  const dropdownOpen = () => setIsDropdownOpen(!isDropdownOpen);
  return {
    handleChoosePhoto,
    handleDeletePhoto,
    handleSubmitReport,
    handleChangeValues,
    name,
    loading,
    photo,
    gender,
    isDropdownOpen,
    genderOptions,
    handleSelectGender,
    dropdownOpen,
  };
};

export default useMissingReport;
