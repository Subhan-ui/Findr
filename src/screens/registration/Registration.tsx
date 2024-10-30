import {Image, View, Text, ScrollView} from 'react-native';

import styles from './RegistrationStyles';
import {RegistrationForm} from '../../components';
import {register} from '../../constants/images';

const Registration = () => (
  <ScrollView>
    <View style={styles.imageView}>
      <Image style={styles.image} source={register} />
    </View>
    <View style={styles.textWrap}>
      <Text style={styles.text}>Findr</Text>
      <Text style={styles.secText}>Join the Search for Hope</Text>
    </View>
    <RegistrationForm />
  </ScrollView>
);

export default Registration;
