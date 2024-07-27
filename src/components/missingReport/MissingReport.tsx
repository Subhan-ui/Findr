import {View, Text, Image, Pressable} from 'react-native';

const MissingReport = () => {
  return (
    <View style={{marginTop: 40, display: 'flex', flexDirection: 'row'}}>
      <Image
        source={require('../../assets/icons/images/person.png')}
        style={{height: 154, width: 115}}
      />
      <View style={{marginLeft: 8, marginRight: 20}}>
        <Text
          style={{
            fontFamily: 'Familjen Grotesk',
            fontWeight: '400',
            fontSize: 16,
            lineHeight: 24,
            color: 'black',
          }}>
          Name: John Doe
        </Text>
        <Text
          style={{
            fontFamily: 'Familjen Grotesk',
            fontWeight: '400',
            fontSize: 16,
            lineHeight: 24,
            color: 'black',
          }}>
          Reported By: Jane Dane
        </Text>
        <Text
          style={{
            fontFamily: 'Familjen Grotesk',
            fontWeight: '400',
            fontSize: 16,
            lineHeight: 24,
            color: 'black',
          }}>
          Location: Some place
        </Text>
        <Text
          style={{
            fontFamily: 'Familjen Grotesk',
            fontWeight: '400',
            fontSize: 16,
            lineHeight: 24,
            color: 'black',
          }}>
          Faisalabad, Pakistan
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
          Description: Lorem ipsum dolor sit amet consectetur, adipisicing elit.
          Pariatur labore optio, quisquam nam temporibus quibusdam sint earum
          sapiente veniam aspernatur nesciunt ex? Illum.
        </Text>
        <Pressable
          style={{
            marginTop: 12,
            backgroundColor: '#5b59fe',
            borderRadius: 8,
            width: 101,
            height: 24,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <Text style={{color: 'white', fontSize: 11}}>Contact Person</Text>
        </Pressable>
      </View>
    </View>
  );
};

export default MissingReport;
