import React from 'react';

import {
  Image,
  Text,
  View
} from 'react-native';

import { styles } from './styles';


export type CharacterProps = {
  id: number,
  name: string;
  image: string;
}

export function CharacterCard({id, name, image}: CharacterProps){
  return (
    <View style={styles.container}>
      <Image source={{ uri: image }} style={styles.image}/>
      <Text style={styles.name}>{name}</Text>
    </View>
  );
}