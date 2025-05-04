import { View, FlatList, StyleSheet, Text, Pressable } from 'react-native';
import { Link } from 'expo-router';
import TaskCard from '../components/TaskCard';
import { useTaskContext } from '../contexts/TaskContext';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import AddButton from '../components/AddButton';

export default function HomeScreen() {
  const { tasks } = useTaskContext();
  const insets = useSafeAreaInsets();

  return (
    <View style={[styles.container, { paddingTop: insets.top + 16 }]}>
      <AddButton />

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
    paddingHorizontal: 16,
    backgroundColor: '#fff',
  },
  addButton: {
    backgroundColor: '#007AFF',
    paddingVertical: 10,
    paddingHorizontal: 16,
    borderRadius: 8,
    alignItems: 'center',
    marginBottom: 16,
  },
  addButtonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
});
