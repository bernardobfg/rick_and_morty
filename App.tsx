import { StatusBar } from 'expo-status-bar';
import React from 'react';
import AppLoading from 'expo-app-loading'
import {useFonts} from 'expo-font'
import { StyleSheet, Text, View } from 'react-native';
import {Roboto_500Medium, Roboto_700Bold} from '@expo-google-fonts/roboto'
import {PatrickHand_400Regular} from "@expo-google-fonts/patrick-hand"
import { AuthProvider } from './src/contexts/auth';
import { Routes } from './src/routes';

export default function App() {
  const [fontsLoaded] = useFonts({
    Roboto_500Medium,
    Roboto_700Bold,
    PatrickHand_400Regular
    
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
