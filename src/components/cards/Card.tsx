import {View, Text, Image} from 'react-native';

import MissingPersonModal from '../missingPersonModal/MissingPersonModal';
import ViewButton from '../viewButton/ViewButton';
import useHandleCard from './useCard';
import styles from './CardStyles';
import {personType} from '../../types/types';

const Card = ({
  name,
  age,
  lastSeen,
  location,
  gender,
  photo,
  email,
  postDate,
}: personType) => {
  const {time, img, modalVisible, handleModal} = useHandleCard(lastSeen, photo);

  return (
    <View style={styles.parentView}>
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
      <View style={styles.wrapperView}>
        <Text style={styles.missingText}>Missing</Text>
      </View>
      <View>
        <Image source={img} style={styles.imagePerson} />
        <Image
          source={require('../../constants/images/images/blank.png')}
          style={styles.blankImg}
        />
        <View style={styles.wrapperContent}>
          <Text style={styles.white}>Name: {name}</Text>
          <Text style={styles.white}>
            Age: {age} ({gender})
          </Text>
          <Text style={styles.white}>Last seen: {time}</Text>
          <Text style={styles.white}>Last seen location: {location}</Text>
          <ViewButton
            handleModal={handleModal}
            text="View Details"
            width={78}
          />
        </View>
      </View>
    </View>
  );
};

export default Card;
