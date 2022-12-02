import { StyleSheet } from 'react-native'
import { THEME } from '../../../../theme'

export const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    marginTop: -31,
  },
  input: {
    flex: 1,
    backgroundColor: THEME.COLOR.GRAY_500,
    color: THEME.COLOR.GRAY_100,
    fontSize: THEME.SIZE.M,
    height: 54,
    padding: 16,
    borderRadius: 6,
    borderColor: THEME.COLOR.GRAY_700,
    borderWidth: 1,
  },
  inputActive: {
    flex: 1,
    backgroundColor: THEME.COLOR.GRAY_500,
    color: THEME.COLOR.GRAY_100,
    fontSize: THEME.SIZE.M,
    height: 54,
    padding: 16,
    borderRadius: 6,
    borderWidth: 1,
    borderColor: THEME.COLOR.PURPLE_DARK,
  },
  button: {
    width: 52,
    backgroundColor: THEME.COLOR.BLUE_DARK,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 6,
    marginLeft: 4,
  },
  icon: {
    color: THEME.COLOR.GRAY_100,
    fontSize: 16,
  },
})
