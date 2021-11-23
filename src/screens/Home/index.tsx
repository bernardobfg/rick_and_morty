import React, { useEffect, useState } from 'react';

import {
  View,
  Text,
  FlatList,
  ActivityIndicator
} from 'react-native';
import { CharacterCard, CharacterProps } from '../../components/CharacterCard';
import { Header } from '../../components/Header';
import { ListDivider } from '../../components/ListDivider';
import { api } from '../../services/api';
import { theme } from '../../styles/theme';

import { styles } from './styles';



export function Home() {
  const [character, setCharacter] = useState<CharacterProps[]>([]);
  const [loading, setLoading] = useState(true);
  const [nextPage, setNextPage] = useState<number | null>(1)
  useEffect(() => {
    fetchCharacters();
  }, [])

  const fetchCharacters = () => {
    setLoading(true);
    api.get(`/character/?page=${nextPage}`).then(response => {
      const nextPageLink = response.data.info.next
      if (nextPageLink) {
        const nextPage = nextPageLink.split('=')[1]
        setNextPage(parseInt(nextPage))
      }
      else {
        setNextPage(null)
      }
      const formatedResult = response.data.results.map((result: CharacterProps) => {
        const translatedStatus = result.status === 'Alive' ? 'Vivo' : result.status === "Dead" ? 'Morto' : "Desconhecido";
        const shortName = result.name.length > 20 ? result.name.substring(0, 20) + '...' : result.name;
        return {
          ...result,
          name: shortName,
          status: translatedStatus
        }
      })
      setCharacter((prev) => [...prev, ...formatedResult])
      setLoading(false);
    });
  }


  return (
    <View style={styles.container}>
      <Header />
      <View>
        <FlatList
          style={styles.list}
          data={character}
          keyExtractor={item => String(item.id)}
          renderItem={({ item }) => (
            <CharacterCard {...item} />
          )}
          ItemSeparatorComponent={() => <ListDivider />}
          contentContainerStyle={{ paddingBottom: 30, paddingTop: 30 }}
          showsVerticalScrollIndicator={false}
          onEndReached={() => fetchCharacters()}
          refreshing={loading}
          ListFooterComponent={() => {
            if (loading) {
              return <ActivityIndicator size="large" color={theme.colors.primary} />
            }
            return null
          }}
        />
        {
          loading &&
          <ActivityIndicator size="large" color={theme.colors.primary} style={{ marginTop: 10 }} />

        }
      </View>
    </View>
  );
}