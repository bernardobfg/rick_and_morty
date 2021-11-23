import { StyleSheet } from 'react-native';
import { theme } from '../../styles/theme';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    paddingVertical: 10,
    paddingHorizontal: 20,
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  image: {
    width: 80,
    height: 80,
    marginRight: 20,
  },
  name: {
    fontSize: 18,
    fontFamily: theme.fonts.title,
    color: theme.colors.text,
  },
  leftCard: {
    flexDirection: 'row',
  },
  
  data: {
    justifyContent: "space-between",
  },
  species: {
    fontSize: 16,
    fontFamily: theme.fonts.text,
    color: theme.colors.text,
  },
  status: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  statusText: {
    fontSize: 12,
    fontFamily: theme.fonts.text,
    color: theme.colors.text,
    marginLeft: 2,
    marginBottom: 1
  }
});