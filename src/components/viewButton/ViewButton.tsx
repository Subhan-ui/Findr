import {Pressable, Text} from 'react-native';
import { colors } from '../../constants/colors';

const ViewButton = ({
  handleModal,
  text,
  width,
}: {
  handleModal: () => void;
  text: string;
  width: number;
}) => {
  return (
    <Pressable
      onPress={handleModal}
      style={{
        marginTop: 12,
        backgroundColor: colors.blue,
        borderRadius: 8,
        width: width,
        height: 24,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}>
      <Text style={{color: 'white', fontSize: 11}}>{text}</Text>
    </Pressable>
  );
};

export default ViewButton;
