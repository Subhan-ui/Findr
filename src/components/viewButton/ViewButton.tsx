import {Pressable, Text} from 'react-native';
import {viewBtnType} from '../../types/types';
import styles from './ViewButtonStyles';

const ViewButton = ({handleModal, text, width}: viewBtnType) => {
  return (
    <Pressable
      onPress={handleModal}
      style={[styles.textWrapper, {width: width}]}>
      <Text style={styles.text}>{text}</Text>
    </Pressable>
  );
};

export default ViewButton;
