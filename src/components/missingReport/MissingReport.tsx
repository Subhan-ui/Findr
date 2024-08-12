import {View, Text, Image, Pressable, Linking} from 'react-native';
import {colors} from '../../constants/colors/colors';
import {reportType} from '../../types/types';
import useEmail from './useEmail';
import styles from './MissingReportStyles';

const MissingReport = ({
  name,
  reportedBy,
  location,
  description,
  email,
  photo,
}: reportType) => {
  const {contactViaEmail} = useEmail(email);
  const details = [
    {id: 1, child: `Name: ${name}`},
    {id: 2, child: `Reported By: ${reportedBy}`},
    {id: 3, child: `Location: ${location}`},
    {id: 4, child: `Description: ${description}`},
  ];

  return (
    <View style={styles.wrapperView}>
      <Image source={{uri: photo}} style={styles.image} />
      <View style={styles.detailWrapper}>
        {details.map(detail => (
          <Text style={styles.text} key={detail.id}>
            {detail.child}
          </Text>
        ))}
        <Pressable style={styles.button} onPress={contactViaEmail}>
          <Text style={styles.buttonText}>Contact Person</Text>
        </Pressable>
      </View>
    </View>
  );
};

export default MissingReport;
