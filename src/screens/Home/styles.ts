import { StyleSheet } from 'react-native'
import { THEME } from '../../theme'

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: THEME.COLOR.GRAY_700,
  },
  board: {
    flex: 1,
    backgroundColor: THEME.COLOR.GRAY_600,
    paddingLeft: 24,
    paddingRight: 24,
  },
  //   fixIOSMajor11: {
  //     ...Platform.select({
  //       ios: {
  //         marginTop: 40,
  //       },
  //     }),
  //   },
})
