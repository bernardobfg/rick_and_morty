import { StyleSheet } from 'react-native';
import { theme } from '../../styles/theme';

export const styles = StyleSheet.create({
  container: {
    width: 250,
    height: 50,
    borderWidth: 1,
    borderRadius: 5,
    padding: 5,
    color: theme.colors.text,
    marginBottom: 10,
    letterSpacing: 1,
  },
  label: {
    fontFamily: theme.fonts.text,
    color: theme.colors.text,
    fontSize: 16,
  }
});