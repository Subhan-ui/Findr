import {Pressable, Text} from 'react-native';

import styles from './NavButtonStyles';
import useTypeNavigation from '../../../navigation/useTypeNavigation';
import {navType} from '../../../types/types';

const NavButton = ({children, text, navigate}: navType) => {
  const navigation = useTypeNavigation();
  return (
    <>
      <Pressable
        onPress={() => navigation.navigate(navigate)}
        style={styles.button}>
        {children}
        <Text style={styles.buttonText}>{text}</Text>
      </Pressable>
    </>
  );
};

export default NavButton;
