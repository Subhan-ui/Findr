import {View, StyleSheet} from 'react-native';
import Logo from '../../components/logo/Logo';
import {useEffect} from 'react';
import useTypeNavigation from '../../hooks/useTypeNavigation';
import {useAppSelector} from '../../store/hooks';
import {selectUser} from '../../store/features/loginSlice';

const styles = StyleSheet.create({
  view: {
    width: '100%',
    height: '100%',
    backgroundColor: '#5b59fe',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

const SpashScreen = () => {
  const navigation = useTypeNavigation();
  const user = useAppSelector(selectUser);
  useEffect(() => {
    console.log(user);
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
