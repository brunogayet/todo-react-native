import { StyleSheet } from 'react-native'
import { THEME } from '../../theme'

export const styles = StyleSheet.create({
  checkboxBase: {
    width: 20,
    height: 20,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 999,
    borderWidth: 2,
    borderColor: THEME.COLOR.BLUE,
    backgroundColor: 'transparent',
  },
  checkboxChecked: {
    backgroundColor: THEME.COLOR.PURPLE_DARK,
    borderWidth: 0,
  },
  checkboxIcon: {
    color: THEME.COLOR.GRAY_100,
    fontSize: 14,
  },
})
