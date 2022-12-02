import { useState } from 'react'
import { Text, TouchableOpacity, View } from 'react-native'

import { styles } from './styles'

import { FontAwesome5 } from '@expo/vector-icons'
import { Checkbox } from '../../../../components/Checkbox'

interface ListItemProps {
  id: string
  name: string
  isComplete: boolean
  onToggleTaskCompletion: (id: string) => void
  onDeleteTask: (id: string) => void
}

export function ListItem({
  id,
  name,
  isComplete,
  onToggleTaskCompletion,
  onDeleteTask,
}: ListItemProps) {
  const [checked, onChange] = useState(false)
  const [onPressDelete, setOnPressDelete] = useState(false)

  function handleDeleteTask() {
    onDeleteTask(id)
  }

  function handleToggleTaskCompletion() {
    onToggleTaskCompletion(id)
  }

  return (
    <View style={styles.container}>
      <Checkbox
        checked={checked}
        onChange={onChange}
        onPress={handleToggleTaskCompletion}
      />

      <Text style={[styles.taskName, isComplete && styles.taskNameStriked]}>
        {name}
      </Text>

      <TouchableOpacity
        style={[
          styles.deleteButton,
          onPressDelete && styles.deleteButtonPressed,
        ]}
        activeOpacity={0.5}
        onPress={handleDeleteTask}
        onPressIn={() => setOnPressDelete(true)}
        onPressOut={() => setOnPressDelete(false)}
      >
        <FontAwesome5
          name="trash-alt"
          style={[styles.deleteIcon, onPressDelete && styles.deleteIconPressed]}
        />
      </TouchableOpacity>
    </View>
  )
}
