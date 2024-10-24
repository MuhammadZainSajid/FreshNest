import { Text, TextInput, View } from 'react-native';
import React, { useState } from 'react';
import { SafeScreen } from '@/components/template';
import { useTheme } from '@/theme';
import { RootScreenProps } from '@/types/navigation';
import { Button, TextField } from '@/components/molecules';

const Login = ({ navigation }: RootScreenProps<'Login'>) => {
  const { layout, gutters, fonts, borders, backgrounds, variant } = useTheme();

  const fields: Fields[] = [
    {
      name: 'email',
      type: 'email',
      placeholder: 'Email Address',
      key: 'email',
      keyboardType: 'email-address',
    },
    {
      name: 'password',
      type: 'password',
      placeholder: 'Password',
      key: 'password',
      secure: true,
    },
  ];
  return (
    <SafeScreen>
      <View style={[layout.flex_1, layout.itemsCenter, layout.justifyCenter]}>
        <View style={[layout.justifyCenter, { width: '80%' }]}>
          <Text
            style={[
              fonts.bold,
              fonts.size_32,
              fonts.alignCenter,
              gutters.marginBottom_32,
              { color: variant === 'dark' ? '#fff' : '#000' },
            ]}
          >
            Login
          </Text>
          {fields.map((field) => {
            return (
              <TextField
                key={field.key}
                secure={field.secure}
                keyboardType={
                  field.keyboardType ? field.keyboardType : 'default'
                }
                placeholder={field.name}
              />
            );
          })}
          <Text
            onPress={() => navigation.navigate('ForgotPassword')}
            style={[
              fonts.size_16,
              fonts.alignLeft,
              gutters.marginTop_12,
              { color: variant === 'dark' ? '#fff' : '#000' },
            ]}
          >
            Forgot Password?
          </Text>

          <Button
            label="Login"
            onPress={() => {
              console.log('LOGIN');
            }}
          ></Button>
          <Text
            onPress={() => navigation.navigate('Signup')}
            style={[
              fonts.size_16,
              fonts.alignCenter,
              gutters.marginTop_12,
              { color: variant === 'dark' ? '#fff' : '#000' },
            ]}
          >
            New to Fresh Nest? Sign up!
          </Text>
        </View>
      </View>
    </SafeScreen>
  );
};

export default Login;
