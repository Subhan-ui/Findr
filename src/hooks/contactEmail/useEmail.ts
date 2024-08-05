import {Linking} from 'react-native';

const useEmail = (email: string) => {
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
  return {contactViaEmail};
};

export default useEmail;
