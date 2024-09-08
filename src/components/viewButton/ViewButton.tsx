import {Pressable, Text} from 'react-native';

import styles from './ViewButtonStyles';
import {viewBtnType} from '../../types/types';

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
