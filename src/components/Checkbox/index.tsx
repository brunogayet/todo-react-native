import { Pressable } from 'react-native'
import { styles } from './styles'

import { Ionicons } from '@expo/vector-icons'

interface CheckboxProps {
  checked: boolean
  onChange: (boolean: boolean) => void
  onPress: () => void
}

export function Checkbox({ checked, onChange, onPress }: CheckboxProps) {
  function onCheckmarkPress() {
    onPress()
    onChange(!checked)
  }

  return (
    <Pressable
      style={[styles.checkboxBase, checked && styles.checkboxChecked]}
      onPress={onCheckmarkPress}
    >
      {checked && <Ionicons name="checkmark" style={styles.checkboxIcon} />}
    </Pressable>
  )
}
