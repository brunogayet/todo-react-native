import { View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'

import { Header } from '../../components/Header'

import { styles } from './styles'

import { TaskBoard } from './components/TaskBoard'

export function Home() {
  return (
    <SafeAreaView style={styles.container}>
      <Header />

      <View style={styles.board}>
        <TaskBoard />
      </View>
    </SafeAreaView>
  )
}
