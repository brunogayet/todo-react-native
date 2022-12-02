import { StyleSheet } from 'react-native'
import { THEME } from '../../../../theme'

export const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 32,
    paddingBottom: 20,
  },
  itemsHeader: {
    flexDirection: 'row',
  },
  textHeader: {
    fontFamily: THEME.FONT.BOLD,
    fontSize: 14,
  },
  textCreated: {
    color: THEME.COLOR.BLUE,
  },
  textFinished: {
    color: THEME.COLOR.PURPLE,
  },
  badge: {
    backgroundColor: THEME.COLOR.GRAY_400,
    marginLeft: 8,
    paddingVertical: 2,
    paddingHorizontal: 8,
    borderRadius: 999,
    justifyContent: 'center',
    alignItems: 'center',
  },
  badgeText: {
    color: THEME.COLOR.GRAY_200,
    fontSize: THEME.SIZE.XS,
  },
  contentListEmpty: {
    paddingTop: 48,
    borderTopWidth: 1,
    borderTopColor: THEME.COLOR.GRAY_400,
    justifyContent: 'center',
    alignItems: 'center',
  },
  contentListTitle: {
    marginTop: 16,
    fontFamily: THEME.FONT.BOLD,
    color: THEME.COLOR.GRAY_300,
    fontSize: THEME.SIZE.S,
  },
  contentListSubtitle: {
    fontFamily: THEME.FONT.REGULAR,
    color: THEME.COLOR.GRAY_300,
    fontSize: THEME.SIZE.S,
  },
})
