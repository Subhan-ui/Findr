import {View, Text} from 'react-native';
import { wrapper } from '../../types/missingReportType';

const MissingReportWrapper = ({
  text,
  children,
  marginTop
}: wrapper) => {
  return (
    <View style={{marginTop:marginTop}}>
      <Text
        style={{
          fontFamily: 'Familjen Grotesk',
          fontSize: 23,
          fontWeight: '400',
          color: 'black',
        }}>
        {text}
      </Text>
      {children}
    </View>
  );
};

export default MissingReportWrapper;
