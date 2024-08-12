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
} from '../../store/features/missingReportSlice';
import {useAppDispatch, useAppSelector} from '../../store/hooks';
import {useState} from 'react';
import useTypeNavigation from '../../navigation/useTypeNavigation';
import {selectUser} from '../../store/features/loginSlice';
import firestore from '@react-native-firebase/firestore';

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

  const handleSubmitReport = () => {
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
        photo,
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
            if (imageUri) {
              setPhoto(imageUri);
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

  const itemsTop = [
    {
      id: 1,
      value: name,
      text: "Missing Person's Full Name",
      onChange: (text: string) =>
        handleChangeValues({name: 'fullName', value: text}),
    },
    {
      id: 2,
      value: gender,
      text: 'Gender',
      onChange: (text: string) =>
        handleChangeValues({name: 'gender', value: text}),
    },
    {
      id: 3,
      value: dateOfBirth,
      text: 'Date of Birth',
      onChange: (text: string) =>
        handleChangeValues({name: 'dateOfBirth', value: text}),
    },
    {
      id: 4,
      value: nickname,
      text: 'Nickname or known alias',
      onChange: (text: string) =>
        handleChangeValues({name: 'nickname', value: text}),
    },
  ];

  const itemsBelow = [
    {
      id: 1,
      value: height,
      text: 'Height',
      onChange: (text: string) =>
        handleChangeValues({name: 'height', value: text}),
    },
    {
      id: 2,
      value: weight,
      text: 'Weight',
      onChange: (text: string) =>
        handleChangeValues({name: 'weight', value: text}),
    },
    {
      id: 3,
      value: eyeColor,
      text: 'Eye Color',
      onChange: (text: string) =>
        handleChangeValues({name: 'eyeColor', value: text}),
    },
    {
      id: 4,
      value: hairColor,
      text: 'Hair Color',
      onChange: (text: string) =>
        handleChangeValues({name: 'hairColor', value: text}),
    },
    {
      id: 5,
      value: length,
      text: 'Length of Hair',
      onChange: (text: string) =>
        handleChangeValues({name: 'length', value: text}),
    },
    {
      id: 6,
      value: location,
      text: 'Last Seen Location',
      onChange: (text: string) =>
        handleChangeValues({name: 'location', value: text}),
    },
  ];
  return {
    handleChoosePhoto,
    handleDeletePhoto,
    handleSubmitReport,
    itemsTop,
    itemsBelow,
    loading,
    photo,
  };
};

export default useMissingReport;
