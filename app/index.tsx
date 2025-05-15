import { useState } from 'react';
import { FlatList, StyleSheet, TextInput, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import AddButton from '../components/AddButton';
import TaskCard from '../components/TaskCard';
import { useTaskContext } from '../contexts/TaskContext';

/**
 * HomeScreen displays a list of tasks with a search bar and an "Add Task" button.
 * Tasks are filtered by title based on user input for the search feature.
 */
export default function HomeScreen() {
  const { tasks } = useTaskContext();
  const insets = useSafeAreaInsets();
  const [search, setSearch] = useState('');

  const filteredTasks = tasks.filter((task) =>
    task.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <View style={[styles.container, { paddingTop: insets.top + 16 }]}>

      {/* Input field for searching tasks */}
      <TextInput
        style={styles.searchInput}
        placeholder="Search tasks..."
        value={search}
        onChangeText={setSearch}
      />

      {/* Button to add a new task */}
      <AddButton />

      {/* FlatList to display the list of tasks */}
      <FlatList
        data={filteredTasks}
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
  searchInput: {
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 12,
    marginBottom: 12,
  },
});
