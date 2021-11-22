import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';

import { SignIn } from "../screens/SignIn";
import { theme } from '../styles/theme';


const { Navigator, Screen } = createStackNavigator();

export function AuthRoutes() {
  return (
    <Navigator
      screenOptions={{
        headerShown: true,
        title:"",
        headerStyle: {
          backgroundColor: "transparent",
          elevation: 0,
          shadowOpacity: 0,
        },
        cardStyle: {
          backgroundColor: theme.colors.background,
        },
      }}
    >
      
      <Screen name="SignIn" component={SignIn} />
    
    </Navigator>
  );
}