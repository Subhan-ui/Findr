import {Image, View, Text, StyleSheet} from 'react-native';
import RegistrationForm from '../../components/registrationForm/RegistrationForm';

const styles = StyleSheet.create({
  imageView: {
    display: 'flex',
    width: '100%',
    alignItems: 'flex-end',
  },
  image: {
    height: 128,
  },
  textWrap: {
    position: 'relative',
    bottom: 12,
    display: 'flex',
    alignItems: 'center',
  },
  text: {
    fontFamily: 'Familjen Grotesk',
    color: '#5B59FE',
    fontSize: 64,
    fontWeight: '700',
  },
  secText: {
    fontWeight: '400',
    color: '#121212',
    fontSize: 23,
    fontFamily: 'Familjen Grotesk',
  },
});

const Registration = () => (
  <>
    <View style={styles.imageView}>
      <Image
        style={styles.image}
        source={require('../../assets/icons/patterns/registration.png')}
      />
    </View>
    <View style={styles.textWrap}>
      <Text style={styles.text}>Findr</Text>
      <Text style={styles.secText}>Join the Search for Hope</Text>
    </View>
    <RegistrationForm />
  </>
);

export default Registration;
