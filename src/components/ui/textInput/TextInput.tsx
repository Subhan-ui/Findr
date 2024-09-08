import {View, Text, TextInput} from 'react-native';

import styles from './TextInputStyles';
import {inputType} from '../../../types/types';

const TextInputs = ({text, value, onChange}: inputType) => (
  <View style={styles.wrapperView}>
    <Text style={styles.text}>{text}</Text>
    <TextInput
      value={value}
      onChangeText={onChange}
      style={styles.textInput}
      placeholder={text === 'Date of Birth' ? '12 Nov 2003' : ''}
    />
  </View>
);

export default TextInputs;
