import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';

import { Home } from "../screens/Home";
import { theme } from '../styles/theme';


const { Navigator, Screen } = createStackNavigator();

export function AppRoutes() {
  return (
    <Navigator
    screenOptions={{
      headerShown: false,
      title:"",
      cardStyle: {
        backgroundColor: theme.colors.background,
      },
    }}
    >
      
      <Screen name="Home" component={Home} />
    
    </Navigator>
  );
}