import {View, Text, TextInput} from 'react-native';
import { colors } from '../../../constants/colors';

const TextInputs = ({
  text,
  value,
  onChange,
}: {
  text: string;
  value: string;
  onChange: (text: string) => void;
}) => (
  <View style={{marginTop: 16}}>
    <Text style={{fontWeight: '500', fontSize: 14, color: '#000000'}}>
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
