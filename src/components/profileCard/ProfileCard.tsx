import {View, Image, Text, Pressable} from 'react-native';

const ProfileCard = ({handleModal}: {handleModal?: () => void}) => {
  return (
    <View
      style={{
        marginTop: 16,
        height: 154,
        marginHorizontal: 21,
        display: 'flex',
        flexDirection: 'row',
      }}>
      <Image
        source={require('../../assets/icons/images/person.png')}
        width={115}
        height={154}
        style={{borderRadius: 4}}
      />
      <View style={{marginLeft: 8}}>
        <Text
          style={{
            fontFamily: 'Familjen Grotesk',
            fontWeight: '400',
            fontSize: 16,
            color: 'black',
            lineHeight: 24,
          }}>
          Name: John Doe
        </Text>
        <Text
          style={{
            fontFamily: 'Familjen Grotesk',
            fontWeight: '400',
            fontSize: 16,
            color: 'black',
            lineHeight: 24,
          }}>
          Age: 5 (Male)
        </Text>
        <Text
          style={{
            fontFamily: 'Familjen Grotesk',
            fontWeight: '400',
            fontSize: 16,
            color: 'black',
            lineHeight: 24,
          }}>
          Last Seen: Some time
        </Text>
        <Text
          style={{
            fontFamily: 'Familjen Grotesk',
            fontWeight: '400',
            fontSize: 16,
            color: 'black',
            lineHeight: 24,
          }}>
          Last Seen Location: Some Location
        </Text>
        <Pressable
          onPress={handleModal}
          style={{
            marginTop: 12,
            backgroundColor: '#5b59fe',
            borderRadius: 8,
            width: 93,
            height: 24,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <Text style={{color: 'white', fontSize: 11}}>View Details</Text>
        </Pressable>
      </View>
    </View>
  );
};

export default ProfileCard;
