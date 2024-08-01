import {View, Text} from 'react-native';

const MissingReportWrapper = ({
  text,
  children,
  marginTop
}: {
  text: string;
  children: React.ReactNode;
  marginTop:number
}) => {
  return (
    <View style={{marginTop:marginTop}}>
      <Text
        style={{
          fontFamily: 'Familjen Grotesk',
          fontSize: 23,
          fontWeight: '400',
          color: 'black',
        //   marginTop,
        }}>
        {text}
      </Text>
      {children}
    </View>
  );
};

export default MissingReportWrapper;
