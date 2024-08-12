import {View, Image, Text} from 'react-native';
import MissingPersonModal from '../missingPersonModal/MissingPersonModal';
import {personType} from '../../types/types';
import ViewButton from '../viewButton/ViewButton';
import useHandleProfile from './useHandleProfile';
import styles from './ProfileCardStyles';

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
  const items = [
    {id: 1, text: `Name: ${name}`},
    {id: 2, text: `Age: ${age} (${gender})`},
    {id: 3, text: `Last Seen: ${time} IST`},
    {id: 4, text: `Last Seen Location: ${location}`},
  ];
  return (
    <View style={styles.wrapperView}>
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
      <Image source={img} width={115} height={154} style={styles.image} />
      <View style={styles.left}>
        {items.map(item => (
          <Text key={item.id} style={styles.text}>
            {item.text}
          </Text>
        ))}
        <ViewButton handleModal={handleModal} text="Details" width={93} />
      </View>
    </View>
  );
};

export default ProfileCard;
