import { StyleSheet } from 'react-native';
import { theme } from '../../styles/theme';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    paddingVertical: 10,
    paddingHorizontal: 20,
  },
  name: {
    fontSize: 20,
    fontFamily: theme.fonts.title,
    color: theme.colors.text,
  },
  image: {
    width: 60,
    height: 60,
    marginRight: 20,
  }
});