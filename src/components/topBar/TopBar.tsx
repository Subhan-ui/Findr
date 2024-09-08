import {Text} from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';

import styles from './TopBarStyles';
import goBackComp from './useTopBar';
import {textType} from '../../types/types';

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
