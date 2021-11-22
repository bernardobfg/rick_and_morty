import { StyleSheet } from 'react-native';
import { theme } from '../../styles/theme';

export const styles = StyleSheet.create({
  container: {
    width: 150,
    height: 42,
    backgroundColor: theme.colors.primary,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 8,
    color: theme.colors.primary,
  },
  text: {
    fontSize: 16,
    fontFamily: theme.fonts.title,
    color: theme.colors.text,
  }
});
//background: linear-gradient(140.24deg, #7500E2 -5.42%, rgba(155, 81, 224, 0) 77.29%), #E0A0D2;