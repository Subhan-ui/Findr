import {Text} from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';
import {textType} from '../../types/types';
import styles from './TopBarStyles';
import goBackComp from './goBack';

const TopBar = ({text}: textType) => {
  const {goBack} = goBackComp();
  return (
    <>
      <Icon onPress={goBack} name="arrowleft" size={18} color="black" />
      <Text onPress={goBack} style={styles.text}>
        {text}
      </Text>
    </>
  );
};

export default TopBar;
