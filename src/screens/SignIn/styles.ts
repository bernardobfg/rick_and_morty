import { StyleSheet } from 'react-native';
import { theme } from '../../styles/theme';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    paddingBottom: 20,
  },
  content: {
    alignItems: 'center',
  },
  title: {
    fontSize: 32,
    marginBottom: 30,
    fontFamily: theme.fonts.title,
    color: theme.colors.title,
  },
  inputs: {
    marginVertical: 32,
  },
  form: {
    width: '100%',
    alignItems: 'center'
  }
  
 
});