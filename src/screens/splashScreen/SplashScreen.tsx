import {View} from 'react-native';
import {useEffect} from 'react';
import useTypeNavigation from '../../navigation/useTypeNavigation';
import {useAppSelector} from '../../store/hooks';
import {selectUser} from '../../store/features/loginSlice';
import {Logo} from '../../components';
import styles from './SpashScreenStyles';

const SpashScreen = () => {
  const navigation = useTypeNavigation();
  const user = useAppSelector(selectUser);
  useEffect(() => {
    const timeout = setTimeout(() => {
      navigation.navigate(user ? 'Home' : 'Login');
    }, 1500);

    return () => clearTimeout(timeout);
  }, [user]);
  return (
    <View style={styles.view}>
      <Logo color="white" />
    </View>
  );
};

export default SpashScreen;
