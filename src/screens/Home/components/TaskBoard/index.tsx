import { useState } from 'react'
import { FlatList, Image, Text, View } from 'react-native'

import 'react-native-get-random-values'
import { v4 as uuidv4 } from 'uuid'

import { ListItem } from '../ListItem'

import { InputTask } from '../InputTask'
import { styles } from './styles'

import iconClipboard from '../../../../assets/clipboard.png'

interface TaskProps {
  id: string
  name: string
  isComplete: boolean
}

export function TaskBoard() {
  const [tasks, setTasks] = useState<TaskProps[]>([])

  const totalCompletedTasks = tasks.filter((task) => task.isComplete).length

  function createTask(task: string) {
    const newTask: TaskProps = {
      id: uuidv4(),
      name: task,
      isComplete: false,
    }

    setTasks((state) => [...state, newTask])
  }

  function deleteTask(id: string) {
    const tasksWithoutCurrent = tasks.filter((task) => task.id !== id)

    setTasks(tasksWithoutCurrent)
  }

  function toggleTaskCompletion(id: string) {
    const tasksWithCurrentChanged = tasks.map((task) =>
      task.id === id
        ? {
            ...task,
            isComplete: !task.isComplete,
          }
        : task,
    )

    setTasks(tasksWithCurrentChanged)
  }

  return (
    <>
      <InputTask onCreateTask={createTask} />

      <View style={styles.header}>
        <View style={styles.itemsHeader}>
          <Text style={[styles.textHeader, styles.textCreated]}>Criadas</Text>
          <View style={styles.badge}>
            <Text style={styles.badgeText}>{tasks.length}</Text>
          </View>
        </View>
        <View style={styles.itemsHeader}>
          <Text style={[styles.textHeader, styles.textFinished]}>
            Concluidas
          </Text>
          <View style={styles.badge}>
            <Text style={styles.badgeText}>{totalCompletedTasks}</Text>
          </View>
        </View>
      </View>

      <FlatList
        data={tasks}
        keyExtractor={(task) => task.id}
        renderItem={({ item }) => (
          <ListItem
            id={item.id}
            name={item.name}
            isComplete={item.isComplete}
            onDeleteTask={deleteTask}
            onToggleTaskCompletion={toggleTaskCompletion}
          />
        )}
        ListEmptyComponent={() => (
          <View style={styles.contentListEmpty}>
            <Image source={iconClipboard} />
            <Text style={styles.contentListTitle}>
              Você ainda não tem tarefas cadastradas
            </Text>
            <Text style={styles.contentListSubtitle}>
              Crie tarefas e organize seus itens a fazer
            </Text>
          </View>
        )}
        showsVerticalScrollIndicator={false}
      />
    </>
  )
}
