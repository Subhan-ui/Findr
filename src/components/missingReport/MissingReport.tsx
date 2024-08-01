import {View, Text, Image, Pressable, Linking} from 'react-native';
import { colors } from '../../constants/colors';

const MissingReport = ({
  name,
  reportedBy,
  location,
  description,
  email,
  photo,
}: {
  name: string;
  reportedBy: string;
  location: string;
  description: string;
  email: string;
  photo: string;
}) => {
  const contactViaEmail = () => {
    const emailUrl = `mailto:${email}`;
    Linking.canOpenURL(emailUrl)
      .then(() => {
        return Linking.openURL(emailUrl);
      })
      .catch(error => {
        console.error(
          'An error occurred while trying to open the email client:',
          error,
        );
      });
  };

  return (
    <View style={{marginTop: 40, display: 'flex', flexDirection: 'row'}}>
      <Image source={{uri: photo}} style={{height: 154, width: 115}} />
      <View style={{marginLeft: 8, marginRight: 20}}>
        <Text
          style={{
            fontFamily: 'Familjen Grotesk',
            fontWeight: '400',
            fontSize: 16,
            lineHeight: 24,
            color: 'black',
          }}>
          Name: {name}
        </Text>
        <Text
          style={{
            fontFamily: 'Familjen Grotesk',
            fontWeight: '400',
            fontSize: 16,
            lineHeight: 24,
            color: 'black',
          }}>
          Reported By: {reportedBy}
        </Text>
        <Text
          style={{
            fontFamily: 'Familjen Grotesk',
            fontWeight: '400',
            fontSize: 16,
            lineHeight: 24,
            color: 'black',
            width: 200,
          }}>
          Location: {location}
        </Text>
        <Text
          style={{
            fontFamily: 'Familjen Grotesk',
            fontWeight: '400',
            fontSize: 16,
            lineHeight: 24,
            color: 'black',
            width: 230,
          }}>
          Description: {description}
        </Text>
        <Pressable
          style={{
            marginTop: 12,
            backgroundColor: colors.blue,
            borderRadius: 8,
            width: 101,
            height: 24,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
          onPress={contactViaEmail}>
          <Text style={{color: 'white', fontSize: 11}}>Contact Person</Text>
        </Pressable>
      </View>
    </View>
  );
};

export default MissingReport;
