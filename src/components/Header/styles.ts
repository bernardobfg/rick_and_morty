import { StyleSheet } from 'react-native';
import { theme } from '../../styles/theme';
import Constants from 'expo-constants'
export const styles = StyleSheet.create({
  container: {
    height: 120,
    width: '100%',
    backgroundColor: theme.colors.primary,
    paddingTop: Constants.statusBarHeight + 10,
    paddingHorizontal: 20,
    paddingBottom: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  logo: {
    fontFamily: theme.fonts.logo,
    color: theme.colors.title,
    fontSize: 30,
  },
  logout: {
    width: 50,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center'
  }
});