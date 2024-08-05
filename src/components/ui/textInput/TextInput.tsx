import {View, Text, TextInput} from 'react-native';
import { colors } from '../../../constants/colors';
import { inputType } from '../../../types/btnType';

const TextInputs = ({
  text,
  value,
  onChange,
}: inputType) => (
  <View style={{marginTop: 16}}>
    <Text style={{fontWeight: '500', fontSize: 14, color: 'black'}}>
      {text}
    </Text>
    <TextInput
      value={value}
      onChangeText={onChange}
      style={{
        borderWidth: 2,
        borderColor: colors.gray,
        paddingLeft: 14,
        paddingRight: 14,
        paddingTop: 10,
        paddingBottom: 10,
        height: 44,
        borderRadius: 8,
      }}
      placeholder={text === 'Date of Birth' ? '12 Nov 2003' : ''}
    />
  </View>
);

export default TextInputs;
