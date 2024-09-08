import styles from './MissingReportWrapperStyles';
import {View, Text} from 'react-native';
import {wrapper} from '../../types/types';

const MissingReportWrapper = ({text, children, marginTop}: wrapper) => {
  return (
    <View style={{marginTop: marginTop}}>
      <Text style={styles.text}>{text}</Text>
      {children}
    </View>
  );
};

export default MissingReportWrapper;
