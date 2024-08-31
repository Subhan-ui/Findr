import {View, Text, Image, Pressable} from 'react-native';
import {reportType} from '../../types/types';
import useEmail from './useMissingReport';
import styles from './MissingReportStyles';

const MissingReport = ({
  name,
  reportedBy,
  location,
  description,
  email,
  photo,
}: reportType) => {
  const {contactViaEmail, details} = useEmail(
    email,
    name,
    reportedBy,
    location,
    description,
  );

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
