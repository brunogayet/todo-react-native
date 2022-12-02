import { useState } from 'react'
import { TextInput, TouchableOpacity, View } from 'react-native'

import { AntDesign } from '@expo/vector-icons'

import { THEME } from '../../../../theme'
import { styles } from './styles'

interface InputTaskProps {
  onCreateTask: (task: string) => void
}

export function InputTask({ onCreateTask }: InputTaskProps) {
  const [onFocus, setOnFocus] = useState(false)

  const [task, setTask] = useState('')

  function handleCreateNewTask() {
    if (task) {
      onCreateTask(task)
      setTask('')
    }
  }

  return (
    <View style={styles.container}>
      <TextInput
        style={[styles.input, onFocus && styles.inputActive]}
        onFocus={() => setOnFocus(true)}
        onBlur={() => setOnFocus(false)}
        onChangeText={setTask}
        value={task}
        placeholder="Adicione uma nova tarefa"
        placeholderTextColor={THEME.COLOR.GRAY_300}
        underlineColorAndroid="transparent"
      />

      <TouchableOpacity
        style={styles.button}
        activeOpacity={0.5}
        onPress={handleCreateNewTask}
      >
        <AntDesign name="pluscircleo" style={styles.icon} />
      </TouchableOpacity>
    </View>
  )
}
