import { useLocalSearchParams } from 'expo-router';
import { StyleSheet, Text, View } from 'react-native';
import BackButton from '../../components/BackButton';
import { useTaskContext } from '../../contexts/TaskContext';

/**
 * TaskDetailScreen
 * 
 * Displays detailed information about a specific task based on the `id` in the route params.
 * If the task exists, shows its title, description, and status.
 * If not, shows a fallback message.
 */
export default function TaskDetailScreen() {
    const { id } = useLocalSearchParams();
    const { tasks } = useTaskContext();

    const task = tasks.find(t => t.id === id);

    if (!task) {
        return (
            <View style={styles.container}>
                <Text>Task not found.</Text>
                <BackButton />
            </View>
        );
    }

    return (
        <View style={styles.container}>
            <Text style={styles.heading}>{task.title}</Text>
            <Text style={styles.description}>{task.description}</Text>
            <Text style={styles.status}>
                Status: {task.status === 'completed' ? '✅ Completed' : '🕒 Pending'}
            </Text>
            <BackButton />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        padding: 16,
        marginTop: 32,
        flex: 1,
        backgroundColor: '#fff',
    },
    heading: {
        fontSize: 22,
        fontWeight: 'bold',
        marginBottom: 16,
    },
    description: {
        fontSize: 16,
        marginBottom: 12,
    },
    status: {
        fontSize: 16,
        fontStyle: 'italic',
        color: '#555',
    },
});
