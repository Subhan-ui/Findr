import {View, Image, Text} from 'react-native';
import MissingPersonModal from '../missingPersonModal/MissingPersonModal';
import {personType} from '../../types/types';
import ViewButton from '../viewButton/ViewButton';
import useHandleProfile from './useProfileCard';
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
  const {time, items, img, modalVisible, handleModal} = useHandleProfile(
    lastSeen,
    photo,
    name,
    age,
    gender,
    location,
  );
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
