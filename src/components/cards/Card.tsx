import {View, Text, Image} from 'react-native';
import {personType} from '../../types/types';
import MissingPersonModal from '../missingPersonModal/MissingPersonModal';
import ViewButton from '../viewButton/ViewButton';
import { colors } from '../../constants/colors';
import useHandleCard from '../../hooks/cards/useHandleCard';

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
  const {
    time,
    img,
    modalVisible,
    handleModal,
  } = useHandleCard(lastSeen, photo)

  return (
    <View
      style={{
        height: 340,
        width: 213,
        borderRadius: 8,
        marginRight: 16,
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
      <View
        style={{
          backgroundColor: colors.red,
          height: 44,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          borderTopEndRadius: 8,
          borderTopLeftRadius: 8,
        }}>
        <Text
          style={{
            color: 'white',
            fontFamily: 'Familjen Grotesk',
            fontSize: 32,
            fontWeight: '400',
          }}>
          Missing
        </Text>
      </View>
      <View>
        <Image
          source={img}
          style={{
            width: 212,
            height: 260,
            zIndex: 100,
            borderBottomLeftRadius: 8,
            borderBottomRightRadius: 8,
          }}
        />
        <Image
          source={require('../../assets/icons/images/blank.png')}
          style={{
            width: 212,
            height: 260,
            zIndex: 200,
            position: 'absolute',
            borderBottomLeftRadius: 8,
            borderBottomRightRadius: 8,
          }}
        />
        <View
          style={{
            position: 'absolute',
            bottom: 16,
            left: 16,
            zIndex: 1000,
          }}>
          <Text style={{color: 'white'}}>Name: {name}</Text>
          <Text style={{color: 'white'}}>
            Age: {age} ({gender})
          </Text>
          <Text style={{color: 'white'}}>Last seen: {time}</Text>
          <Text style={{color: 'white'}}>Last seen location: {location}</Text>
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
