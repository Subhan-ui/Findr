import {useNavigation, NavigationProp} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {useEffect} from 'react';
import auth from '@react-native-firebase/auth';

import {navigatorTypes} from '../types/types';
import {useAppDispatch, useAppSelector} from '../store/hooks';
import {
  handleChangeEmail,
  handleChangeName,
  handleUser,
  selectUser,
} from '../store/features/loginSlice';

export const useNavigations = () => {
  const dispatch = useAppDispatch();
  const user = useAppSelector(selectUser);
  const Stack = createNativeStackNavigator<navigatorTypes>();

  useEffect(() => {
    const unsubscribe = auth().onAuthStateChanged(fUser => {
      if (fUser) {
        dispatch(
          handleUser({
            displayName: fUser.displayName,
            email: fUser.email,
            photoURL: fUser.photoURL,
            uid: fUser.uid,
          }),
        );
        dispatch(handleChangeName(fUser.displayName || ''));
        dispatch(handleChangeEmail(fUser.email || ''));
      }
    });

    return () => unsubscribe();
  }, [dispatch]);
  return {Stack, user};
};

const useTypeNavigation = () => useNavigation<NavigationProp<navigatorTypes>>();

export default useTypeNavigation;
