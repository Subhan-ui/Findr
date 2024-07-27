import {View, StyleSheet} from 'react-native';
import Logo from '../../components/logo/Logo';
import {useEffect} from 'react';
import useTypeNavigation from '../../hooks/useTypeNavigation';

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
  useEffect(() => {
    setTimeout(() => {
      navigation.navigate('Login');
    }, 1500);
  }, []);
  return (
    <View style={styles.view}>
      <Logo color="white" />
    </View>
  );
};

export default SpashScreen;
