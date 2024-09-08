import {useEffect} from 'react';
import firestore from '@react-native-firebase/firestore';

import {
  handleChangeQuery,
  handleData,
  selectSearchData,
} from '../../store/features/missingReportSlice';
import {useAppDispatch, useAppSelector} from '../../store/hooks';

const useGetReports = () => {
  const dispatch = useAppDispatch();
  const data = useAppSelector(selectSearchData);
  useEffect(() => {
    firestore()
      .collection('Reports')
      .get()
      .then(querySnapshot => {
        const data = querySnapshot.docs.map(documentSnapshot => {
          const documentData = documentSnapshot.data();
          const [day, month, year] = documentData?.dateOfBirth.split(' ');
          const newYear = new Date().getFullYear();
          const age = Math.abs(newYear - year);
          return {
            id: documentData?.id,
            gender: documentData?.gender,
            name: documentData?.name || '',
            age: age.toString() || '',
            lastSeen: documentData?.date || '',
            location: documentData?.location || '',
            email: documentData?.email || '',
            photo: documentData?.photo,
            postDate: documentData?.postedDate,
          };
        });
        dispatch(handleData(data));
        dispatch(handleChangeQuery(''));
      })
      .catch(error => {
        console.error('Error fetching reports:', error);
      });
  }, [dispatch]);
  return {data};
};

export default useGetReports;
