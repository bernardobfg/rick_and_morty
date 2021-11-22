import React, { useState } from 'react';

import {
  View,
  ScrollView,
  Text,
  Platform,
  KeyboardAvoidingView
} from 'react-native';

import { styles } from './styles';
import Logo from "../../assets/logo.svg"
import { useAuth } from '../../hooks/useAuth';
import { Button } from '../../components/Button';
import { Input } from '../../components/Input';
export function SignIn() {
  const { signIn, loading } = useAuth()
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const handleSignIn = () => {
    console.log("Sign")
    signIn()
  }

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={styles.container}
    >
      <ScrollView
        contentContainerStyle={styles.content}
      >
        <Text style={styles.title}>Rick And Morty</Text>
        <Logo width={150} height={150} />
        <View style={styles.form}>
          <View style={styles.inputs}>
            <Input
              label="Email"
              keyboardType='email-address'
              value={email}
              onChangeText={setEmail}
            />
            <Input
              label="Senha"
              secureTextEntry
              value={password}
              onChangeText={setPassword}
            />
            
          </View>
          <Button loading={loading} onPress={handleSignIn} />
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}