import { StatusBar } from 'expo-status-bar';
import React from 'react';
import AppLoading from 'expo-app-loading'
import {useFonts} from 'expo-font'
import { StyleSheet, Text, View } from 'react-native';
import {Roboto_500Medium, Roboto_700Bold, Roboto_100Thin} from '@expo-google-fonts/roboto'
import { AuthProvider } from './src/contexts/auth';
import { Routes } from './src/routes';

export default function App() {
  const [fontsLoaded] = useFonts({
    Roboto_500Medium,
    Roboto_700Bold,
    Roboto_100Thin
    
  })
  if (!fontsLoaded) {
    return <AppLoading/>
  } 
  return (
    <AuthProvider>
      <StatusBar
        style="light"
        backgroundColor="transparent"
        translucent
      />
      <Routes/>
    </AuthProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    fontFamily: 'Roboto_100Thin'
  },
  text: {
    fontFamily: 'Roboto_700Bold'
  }
});
