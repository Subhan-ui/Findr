import {Text} from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';
import useTypeNavigation from '../../hooks/useTypeNavigation';
import { textType } from '../../types/navbarType';

const TopBar = ({text}: textType) => {
  const navigation = useTypeNavigation();
  const goBack = () => {
    navigation.goBack();
  };
  return (
    <>
      <Icon onPress={goBack} name="arrowleft" size={18} color="black" />
      <Text
        onPress={goBack}
        style={{
          fontFamily: 'Familjen Grotesk',
          color: 'black',
          fontWeight: '600',
          fontSize: 23,
        }}>
        {text}
      </Text>
    </>
  );
};

export default TopBar;
