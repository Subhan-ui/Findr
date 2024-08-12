import {Pressable, SafeAreaView, StyleSheet, Text, View} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import Icon1 from 'react-native-vector-icons/MaterialCommunityIcons';
import Button from '../ui/button/Button';
import EmailButton from '../ui/emailButton/EmailButton';
import PasswordInput from '../ui/passwordInput/PasswordInput';
import TextInputs from '../ui/textInput/TextInput';
import useRegister from './useRegister';
import {colors} from '../../constants/colors/colors';
import styles from './RegistrationFormStyles';

const RegistrationForm = () => {
  const {
    clicked,
    loading,
    name,
    onPressFunction,
    onEmailSignUp,
    handleChanges,
  } = useRegister();
  return (
    <SafeAreaView style={styles.safeArea}>
      <TextInputs text="Name" value={name} onChange={handleChanges} />
      <EmailButton />
      <PasswordInput />
      <View style={styles.remember}>
        <Pressable onPress={onPressFunction} style={styles.rememberWidth}>
          {clicked ? (
            <Icon name="checkbox-outline" size={16} color="black" />
          ) : (
            <Icon1 name="checkbox-blank-outline" size={16} color="black" />
          )}
        </Pressable>
        <View style={styles.viewRemember}>
          <Text style={styles.textRemember}>Remember Me</Text>
          <Text style={styles.textRemember2}>
            Save my login details for next time
          </Text>
        </View>
      </View>
      <Button onPress={() => onEmailSignUp()} loading={loading}>
        {loading ? 'Registering...' : 'Register'}
      </Button>
      <View style={styles.belowButton}>
        <Text style={styles.blueUnderline}>Need Help or Have Questions?</Text>
      </View>
    </SafeAreaView>
  );
};

export default RegistrationForm;
