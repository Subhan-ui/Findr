import {Pressable, StyleSheet, Text} from 'react-native';

const Button = ({
  children,
  onPress,
}: {
  children: string;
  onPress?: () => void;
}) => {
  const styles = StyleSheet.create({
    view: {
      width: '100%',
      backgroundColor: '#5B59FE',
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
    <Pressable onPress={onPress} style={styles.view}>
      <Text style={styles.text}>{children}</Text>
    </Pressable>
  );
};

export default Button;
