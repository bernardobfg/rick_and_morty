import React, { useEffect, useState } from 'react';

import {
  View,
  Text,
  FlatList,
  ActivityIndicator
} from 'react-native';
import { CharacterCard, CharacterProps } from '../../components/CharacterCard';
import { Header } from '../../components/Header';
import { api } from '../../services/api';
import { theme } from '../../styles/theme';

import { styles } from './styles';



export function Home() {
  const [character, setCharacter] = useState<CharacterProps[]>([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setLoading(true);
    api.get('/character/?page=1').then(response => {
      setCharacter(response.data.results);
      setTimeout(() => {
        setLoading(false)
      }, 2000)
    });
  }, [])
  return (
    <View style={styles.container}>
      <Header />
      <View>
        {
          loading ?
            <ActivityIndicator size="large" color={theme.colors.primary} /> :
            <FlatList
              style={styles.list}
              data={character}
              keyExtractor={item => String(item.id)}
              renderItem={({ item }) => (
                <CharacterCard {...item} />
              )}
            />
        }
      </View>
    </View>
  );
}