import React from 'react';
import { Text } from 'react-native';
import { useTheme } from '@/theme';
import RNBounceable from '@freakycoder/react-native-bounceable';

interface ButtonProps {
  label: string;
  onPress: () => void;
  disabled?: boolean;
}

const Button = ({ label, onPress, disabled = false }: ButtonProps) => {
  const { layout, gutters, fonts, backgrounds, borders, variant } = useTheme();

  return (
    <RNBounceable
      style={[
        layout.itemsCenter,
        layout.justifyCenter,
        gutters.paddingVertical_12,
        gutters.marginVertical_16,
        borders.rounded_16,
        backgrounds.gray800,
        disabled ? backgrounds.gray400 : backgrounds.gray800, // change bg color when disabled
        { width: '100%' },
      ]}
      onPress={onPress}
      disabled={disabled}
    >
      <Text
        style={[
          fonts.size_16,
          fonts.bold,
          fonts.alignCenter,
          { color: variant === 'dark' ? '#000' : '#fff' },
        ]}
      >
        {label}
      </Text>
    </RNBounceable>
  );
};

export default Button;
