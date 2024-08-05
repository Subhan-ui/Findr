import {View, Image, Text} from 'react-native';
import MissingPersonModal from '../missingPersonModal/MissingPersonModal';
import {personType} from '../../types/types';
import ViewButton from '../viewButton/ViewButton';
import useHandleProfile from '../../hooks/profileCard/useHandleProfile';

const ProfileCard = ({
  name,
  age,
  lastSeen,
  location,
  gender,
  photo,
  email,
  postDate,
}: personType) => {
  const {time, img, modalVisible, handleModal} = useHandleProfile(
    lastSeen,
    photo,
  );
  return (
    <View
      style={{
        marginTop: 16,
        height: 154,
        marginHorizontal: 21,
        display: 'flex',
        flexDirection: 'row',
      }}>
      <MissingPersonModal
        modalVisible={modalVisible}
        handleModal={handleModal}
        name={name}
        age={age}
        lastSeen={time}
        location={location}
        gender={gender}
        photo={photo}
        email={email}
        postDate={postDate}
      />
      <Image source={img} width={115} height={154} style={{borderRadius: 4}} />
      <View style={{marginLeft: 8}}>
        <Text
          style={{
            fontFamily: 'Familjen Grotesk',
            fontWeight: '400',
            fontSize: 16,
            color: 'black',
            lineHeight: 24,
          }}>
          Name: {name}
        </Text>
        <Text
          style={{
            fontFamily: 'Familjen Grotesk',
            fontWeight: '400',
            fontSize: 16,
            color: 'black',
            lineHeight: 24,
          }}>
          Age: {age} ({gender})
        </Text>
        <Text
          style={{
            fontFamily: 'Familjen Grotesk',
            fontWeight: '400',
            fontSize: 16,
            color: 'black',
            lineHeight: 24,
          }}>
          Last Seen: {time} IST
        </Text>
        <Text
          style={{
            fontFamily: 'Familjen Grotesk',
            fontWeight: '400',
            fontSize: 16,
            color: 'black',
            lineHeight: 24,
          }}>
          Last Seen Location: {location}
        </Text>
        <ViewButton handleModal={handleModal} text="Details" width={93} />
      </View>
    </View>
  );
};

export default ProfileCard;
