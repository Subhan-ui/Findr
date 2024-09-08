import {Pressable, Text} from 'react-native';

import styles from './ButtonStyles';
import {colors} from '../../../constants/colors/colors';
import {btnType} from '../../../types/types';

const Button = ({children, onPress, loading}: btnType) => {
  return (
    <Pressable
      onPress={onPress}
      style={[
        styles.view,
        {backgroundColor: loading ? colors.blueDisabled : colors.blue},
      ]}
      disabled={loading}>
      <Text style={styles.text}>{children}</Text>
    </Pressable>
  );
};

export default Button;
