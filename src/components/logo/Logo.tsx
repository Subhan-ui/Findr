import {View, Text, StyleSheet} from 'react-native';
import {logoType} from '../../types/types';
import styles from './LogoStyles';

const Logo = ({color}: logoType) => {
  return (
    <>
      <View style={styles.view}>
        <Text style={[styles.text, {color}]}>Findr</Text>
        <Text style={[styles.small, {color}]}>Search for hope</Text>
      </View>
    </>
  );
};

export default Logo;
