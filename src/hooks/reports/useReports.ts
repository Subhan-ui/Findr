import {ToastAndroid} from 'react-native';
import {handleReports, selectReports} from '../../store/features/reportSlice';
import {useEffect} from 'react';
import {useAppDispatch, useAppSelector} from '../../store/hooks';
import {selectUser} from '../../store/features/loginSlice';
import firestore from '@react-native-firebase/firestore';

const useReports = () => {
  const user = useAppSelector(selectUser);
  const dispatch = useAppDispatch();
  const reports = useAppSelector(selectReports);
  useEffect(() => {
    firestore()
      .collection('Found')
      .where('email', '==', user?.email)
      .get()
      .then(querySnapshot => {
        const data = querySnapshot?.docs?.map(query => {
          const documentData = query?.data();
          return {
            id: documentData?.id,
            age: documentData?.age,
            description: documentData?.description,
            senderEmail: documentData?.submitterEmail,
            location: documentData?.location,
            name: documentData?.name,
            photo: documentData?.photo,
            reportedBy: documentData?.reportedBy,
            postDate: documentData?.postedDate,
          };
        });

        dispatch(handleReports(data));
      })
      .catch(err => {
        ToastAndroid.show(err?.message, ToastAndroid.LONG);
      });
  }, []);
  return {reports};
};

export default useReports;
