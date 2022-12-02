import { StyleSheet } from 'react-native'
import { THEME } from '../../../../theme'

export const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: THEME.COLOR.GRAY_500,
    paddingVertical: 12,
    paddingLeft: 12,
    paddingRight: 8,
    borderRadius: 8,
    marginBottom: 8,
  },
  checkbox: {
    borderRadius: 999,
    borderColor: THEME.COLOR.BLUE,
  },
  taskName: {
    flex: 1,
    color: THEME.COLOR.GRAY_100,
    fontFamily: THEME.FONT.REGULAR,
    fontSize: THEME.SIZE.S,
    paddingHorizontal: 8,
  },
  taskNameStriked: {
    textDecorationLine: 'line-through',
    color: THEME.COLOR.GRAY_300,
  },
  deleteButton: {
    width: 32,
    height: 32,
    justifyContent: 'center',
    alignItems: 'center',
  },
  deleteButtonPressed: {
    backgroundColor: THEME.COLOR.GRAY_400,
    borderRadius: 4,
  },
  deleteIcon: {
    color: THEME.COLOR.GRAY_300,
    fontSize: THEME.SIZE.M,
  },
  deleteIconPressed: {
    color: THEME.COLOR.DANGER,
  },
})
