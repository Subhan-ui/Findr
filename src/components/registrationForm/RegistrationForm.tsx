import {Pressable, SafeAreaView, StyleSheet, Text, View} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import Icon1 from 'react-native-vector-icons/MaterialCommunityIcons';
import Button from '../ui/button/Button';
import EmailButton from '../ui/emailButton/EmailButton';
import PasswordInput from '../ui/passwordInput/PasswordInput';
import TextInputs from '../ui/textInput/TextInput';
import useRegister from '../../hooks/registration/useRegister';
import { colors } from '../../constants/colors';

const styles = StyleSheet.create({
  safeArea: {
    display: 'flex',
    justifyContent: 'center',
    marginLeft: 34,
    marginRight: 34,
  },
  nameInput: {
    marginBottom: 6,
    fontWeight: '500',
    color: colors.black,
  },
  Input: {
    borderWidth: 2,
    borderColor: colors.gray,
    paddingLeft: 14,
    paddingRight: 14,
    paddingTop: 10,
    paddingBottom: 10,
    height: 44,
    borderRadius: 8,
  },
});

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
      <View
        style={{
          marginTop: 26,
          display: 'flex',
          flexDirection: 'row',
          gap: 8,
          marginBottom: 24,
        }}>
        <Pressable onPress={onPressFunction} style={{width: 20}}>
          {clicked ? (
            <Icon name="checkbox-outline" size={16} color="black" />
          ) : (
            <Icon1 name="checkbox-blank-outline" size={16} color="black" />
          )}
        </Pressable>
        <View style={{position: 'relative', bottom: 2}}>
          <Text
            style={{
              fontWeight: '500',
              color: 'black',
              fontSize: 14,
              lineHeight: 20,
            }}>
            Remember Me
          </Text>
          <Text
            style={{
              fontWeight: '400',
              color: colors.darkGray,
              fontSize: 14,
              lineHeight: 20,
            }}>
            Save my login details for next time
          </Text>
        </View>
      </View>
      <Button onPress={() => onEmailSignUp()} loading={loading}>
        {loading ? 'Registering...' : 'Register'}
      </Button>
      <View style={{marginTop: 31, display: 'flex', alignItems: 'center'}}>
        <Text
          style={{
            fontFamily: 'Familjen Grotesk',
            color: colors.blue,
            fontWeight: '400',
            fontSize: 16,
            textDecorationLine: 'underline',
          }}>
          Need Help or Have Questions?
        </Text>
      </View>
    </SafeAreaView>
  );
};

export default RegistrationForm;
