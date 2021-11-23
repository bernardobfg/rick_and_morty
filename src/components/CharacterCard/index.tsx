import React, { useState } from 'react';

import {
  Image,
  Text,
  View
} from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import { styles } from './styles';
import { RectButton } from 'react-native-gesture-handler';


export type CharacterProps = {
  id: number,
  name: string;
  image: string;
  status: string;
  species: string;
}

export function CharacterCard({ id, name, image, species, status }: CharacterProps) {
  const [loved, setLoved] = useState(false);
  const handleLove = () => {
    setLoved(!loved);
  }
  return (
    <View style={styles.container}>
      <View style={styles.leftCard}>
        <Image source={{ uri: image }} style={styles.image} />
        <View style={styles.data}>
          <Text style={styles.name}>{name}</Text>
          <Text style={styles.species}>{species}</Text>
          <View style={styles.status}>
            
            {
              status === 'Vivo' ?
                <AntDesign name="check" size={16} color="green" /> :
                status === 'Morto' ?
                  <AntDesign name="close" size={16} color="red" /> :
                  <AntDesign name="question" size={16} color="gray" />
            }
            <Text style={styles.statusText}>
              {status}
            </Text>
          </View>
        </View>
      </View>
      <RectButton>
        <AntDesign
          onPress={handleLove}
          name="heart"
          size={24}
          color={`rgba(200,150,150,${loved ? 2 : 0.2})`}
        />
      </RectButton>
    </View>
  );
}