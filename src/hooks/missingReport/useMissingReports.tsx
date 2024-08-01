import {ToastAndroid} from 'react-native';
import {launchImageLibrary} from 'react-native-image-picker';
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
import useTypeNavigation from '../useTypeNavigation';
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
  const [show, setShow] = useState(false);
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
          ToastAndroid.show(err.message, ToastAndroid.LONG);
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
      launchImageLibrary({mediaType: 'photo'}, (response: any) => {
        if (response.didCancel) {
          ToastAndroid.show('User cancelled image picker',ToastAndroid.LONG);
        } else if (response.error) {
          ToastAndroid.show(`Image picker error: ${response.error}`,ToastAndroid.LONG);
        } else {
          let imageUri = response.uri || response.assets?.[0]?.uri;
          setPhoto(imageUri);
        }
      });
    } catch (err:any) {
      ToastAndroid.show(err.message,ToastAndroid.LONG);
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
  return {
    handleChoosePhoto,
    handleDeletePhoto,
    handleChangeValues,
    handleSubmitReport,
    loading,
    photo,
    name,
    gender,
    dateOfBirth,
    nickname,
    height,
    weight,
    eyeColor,
    hairColor,
    length,
    location,
  };
};

export default useMissingReport;
