import React, { useState } from 'react';
import { View } from 'react-native';
import { Input as TextField, InputContainer, Icon } from '../../atoms';

interface InputProps {
  placeholder: string;
  keyboardType: keyboardType;
  secure?: boolean;
}

const Input = ({
  placeholder,
  keyboardType,

  secure,
}: InputProps) => {
  const [tempSecure, setSecure] = useState<boolean>(secure ? secure : false);

  return (
    <InputContainer>
      <TextField
        placeholder={placeholder}
        secureTextEntry={tempSecure}
        keyboardType={keyboardType}
      />
      {secure && <Icon secure={tempSecure} onPress={setSecure!!} />}
    </InputContainer>
  );
};

export default Input;
