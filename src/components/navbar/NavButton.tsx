import {Pressable, Text} from 'react-native';
import useTypeNavigation from '../../hooks/useTypeNavigation';

const NavButton = ({
  children,
  text,
  navigate,
}: {
  children: React.ReactNode;
  text: string;
  navigate: 'Home' | 'Reports' | 'MissingReport' | 'Edit';
}) => {
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
            color: '#000000',
          }}>
          {text}
        </Text>
      </Pressable>
    </>
  );
};

export default NavButton;
