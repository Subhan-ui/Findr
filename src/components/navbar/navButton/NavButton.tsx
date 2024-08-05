import {Pressable, Text} from 'react-native';
import useTypeNavigation from '../../../hooks/useTypeNavigation';
import { navType } from '../../../types/navbarType';

const NavButton = ({
  children,
  text,
  navigate,
}: navType) => {
  const navigation = useTypeNavigation();
  return (
    <>
      <Pressable
        onPress={() => navigation.navigate(navigate)}
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        {children}
        <Text
          style={{
            fontFamily: 'Familjen Grotesk',
            fontSize: 12,
            color: 'black',
          }}>
          {text}
        </Text>
      </Pressable>
    </>
  );
};

export default NavButton;
