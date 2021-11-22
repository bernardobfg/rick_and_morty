import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';

import { Home } from "../screens/Home";
import { theme } from '../styles/theme';


const { Navigator, Screen } = createStackNavigator();

export function AppRoutes() {
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
      
      <Screen name="Home" component={Home} />
    
    </Navigator>
  );
}