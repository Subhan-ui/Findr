import {Image, View, Text, ScrollView} from 'react-native';

import styles from './RegistrationStyles';
import {RegistrationForm} from '../../components';

const Registration = () => (
  <ScrollView>
    <View style={styles.imageView}>
      <Image
        style={styles.image}
        source={require('../../constants/images/patterns/registration.png')}
      />
    </View>
    <View style={styles.textWrap}>
      <Text style={styles.text}>Findr</Text>
      <Text style={styles.secText}>Join the Search for Hope</Text>
    </View>
    <RegistrationForm />
  </ScrollView>
);

export default Registration;
