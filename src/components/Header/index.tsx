import React from 'react';

import {
  Text,
  TouchableOpacity,
  View
} from 'react-native';
import PinkLogo from "../../assets/pink_logo.svg"
import { AntDesign } from '@expo/vector-icons';
import { styles } from './styles';
import { RectButton } from 'react-native-gesture-handler';
import { useAuth } from '../../hooks/useAuth';

export function Header() {
  const {signOut, user} = useAuth()
  const handleSignOut = () => {
    signOut()
  }
  return (
    <View style={styles.container}>
      <PinkLogo width={50} height={50}/>
      <Text style={styles.logo}>
        Rick and Morty
      </Text>
      <RectButton style={styles.logout} onPress={handleSignOut}>
        <AntDesign name="logout" size={24} color="#fff" />
      </RectButton>
    </View>
  );
}