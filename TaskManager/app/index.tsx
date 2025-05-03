// app/index.tsx
import { View, FlatList, StyleSheet } from 'react-native';
import { useState } from 'react';
import TaskCard from '../components/TaskCard';
import { Task } from '../types/Task';
import { mockTasks } from '../constants/mockTasks';

export default function HomeScreen() {
  const [tasks, setTasks] = useState<Task[]>(mockTasks);

  return (
    <View style={styles.container}>
      <FlatList
        data={tasks}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <TaskCard task={item} />}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#fff',
  },
});
