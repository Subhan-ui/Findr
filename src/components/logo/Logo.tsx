import {View, Text, StyleSheet} from 'react-native';
import {logoType} from '../../types/filterType';

const Logo = ({color}: logoType) => {
  const styles = StyleSheet.create({
    view: {
      width: 167,
      height: 96,
      position: 'relative',
    },
    text: {
      fontFamily: 'Familjen Grotesk',
      color: color,
      fontSize: 64,
      fontWeight: '700',
    },
    small: {
      fontFamily: 'Satisfy',
      color: color,
      fontWeight: '400',
      position: 'absolute',
      left: 80,
      top: 65,
    },
  });
  return (
    <>
      <View style={styles.view}>
        <Text style={styles.text}>Findr</Text>
        <Text style={styles.small}>Search for hope</Text>
      </View>
    </>
  );
};

export default Logo;
