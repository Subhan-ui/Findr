import {Linking, ToastAndroid} from 'react-native';
import firestore from '@react-native-firebase/firestore';
import {
  handleChangeFound,
  selectDescription,
  selectLocation,
} from '../../store/features/reportSlice';
import {useAppDispatch, useAppSelector} from '../../store/hooks';
import {useState} from 'react';
import {selectUser} from '../../store/features/loginSlice';

const useContact = (
  photo: string,
  name: string,
  age: string,
  lastSeen: string,
  gender: string,
  handleModal: () => void,
  location: string,
) => {
  const img = {uri: photo};
  const locations = useAppSelector(selectLocation);
  const description = useAppSelector(selectDescription);
  const dispatch = useAppDispatch();
  const [loading, setLoading] = useState(false);

  const handleChange = (name: string, value: string) => {
    dispatch(handleChangeFound({name, value}));
  };
  const user = useAppSelector(selectUser);
  const handleReportFound = (email: string | undefined) => {
    if (locations.trim().length <= 0 || description.trim().length <= 0) {
      ToastAndroid.show('all the field are necessary', ToastAndroid.LONG);
    } else {
      setLoading(true);
      const data = {
        location: locations,
        description: description,
        email: email,
        photo: photo,
        name,
        age,
        lastSeen,
        gender,
        submitterEmail: user?.email,
        postedDate: new Date().toLocaleString(),
        reportedBy: user?.displayName,
      };
      firestore()
        .collection('Found')
        .add(data)
        .then(() => {
          ToastAndroid.show(
            'Thank YOu for submitting report',
            ToastAndroid.LONG,
          );
          handleModal();
          handleChange('location', '');
          handleChange('description', '');
        })
        .catch(err => {
          ToastAndroid.show(err.message, ToastAndroid.LONG);
        })
        .finally(() => setLoading(false));
    }
  };

  const contactViaEmail = (email: string | undefined) => {
    const emailUrl = `mailto:${email}`;
    Linking.canOpenURL(emailUrl)
      .then(supported => {
        return Linking.openURL(emailUrl);
      })
      .catch(error => {
        console.error(
          'An error occurred while trying to open the email client:',
          error,
        );
      });
  };

  const details = [
    {id: 1, children: name},
    {id: 2, children: `${age} ${gender}`},
    {id: 3, children: `Last seen: ${lastSeen} IST`},
    {id: 4, children: `Last seen location: ${location}`},
  ];
  return {
    loading,
    img,
    locations,
    description,
    details,
    contactViaEmail,
    handleReportFound,
    handleChange,
  };
};

export default useContact;
