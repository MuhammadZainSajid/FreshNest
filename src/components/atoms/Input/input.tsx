import React from 'react';
import { TextInput as Input } from 'react-native';
import { useTheme } from '@/theme';

interface TextInputProps {
  placeholder: string;
  secureTextEntry?: boolean;
  keyboardType?: keyboardType;
  style?: object;
}

const TextInput = ({
  placeholder,
  secureTextEntry,
  keyboardType = 'default',
  style,
}: TextInputProps) => {
  const { borders, gutters, variant, fonts } = useTheme();

  return (
    <Input
      placeholder={placeholder}
      placeholderTextColor={variant === 'dark' ? '#fff' : '#000'}
      secureTextEntry={secureTextEntry}
      keyboardType={keyboardType}
      style={[
        {
          flex: 1,
          color: variant === 'dark' ? '#fff' : '#000',
        },

        style,
      ]}
    />
  );
};

export default TextInput;
