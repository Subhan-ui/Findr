import {Pressable, StyleSheet, Text} from 'react-native';
import { colors } from '../../../constants/colors';

const Button = ({
  children,
  onPress,
  loading,
}: {
  children: string | string[];
  onPress?: () => void;
  loading?: boolean;
}) => {
  const styles = StyleSheet.create({
    view: {
      width: '100%',
      backgroundColor: loading ? colors.blueDisabled : colors.blue,
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      paddingTop: 12,
      paddingBottom: 12,
      paddingLeft: 16,
      paddingRight: 16,
      borderRadius: 8,
    },
    text: {
      color: 'white',
      fontWeight: '600',
      fontSize: 23,
      fontFamily: 'Familjen Grotesk',
    },
  });
  return (
    <Pressable onPress={onPress} style={styles.view} disabled={loading}>
      <Text style={styles.text}>{children}</Text>
    </Pressable>
  );
};

export default Button;
