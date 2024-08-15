import {Linking} from 'react-native';

const useEmail = (
  email: string,
  name: string,
  reportedBy: string,
  location: string,
  description: string,
) => {
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
  const details = [
    {id: 1, child: `Name: ${name}`},
    {id: 2, child: `Reported By: ${reportedBy}`},
    {id: 3, child: `Location: ${location}`},
    {id: 4, child: `Description: ${description}`},
  ];
  return {contactViaEmail, details};
};

export default useEmail;
