import {View, Text, TextInput} from 'react-native';

const TextInputs = ({
  text,
  value,
  onChange,
}: {
  text: string;
  value: string;
  onChange: (text: string) => void;
}) => {
  const placeholder = text === 'Date of Birth' ? '12 Nov 2003' : '';
  return (
    <View style={{marginTop: 16}}>
      <Text style={{fontWeight: '500', fontSize: 14, color: '#000000'}}>
        {text}
      </Text>
      <TextInput
        value={value}
        onChangeText={onChange}
        style={{
          borderWidth: 2,
          borderColor: '#d0d5dd',
          paddingLeft: 14,
          paddingRight: 14,
          paddingTop: 10,
          paddingBottom: 10,
          height: 44,
          borderRadius: 8,
        }}
        placeholder={placeholder}
      />
    </View>
  );
};

export default TextInputs;
