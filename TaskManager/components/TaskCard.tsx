import { View, Text, StyleSheet } from 'react-native';
import { Task } from '../types/Task';

interface Props {
    task: Task;
}

/**
 * TaskCard component displays a single task's information including
 * title, description, and completion status.
 *
 * @param task - The task object containing title, description, and status.
 */
export default function TaskCard({ task }: Props) {
    return (
        <View style={styles.card}>
            <Text style={styles.title}>{task.title}</Text>
            <Text>{task.description}</Text>
            <Text style={styles.status}>
                {task.status === 'completed' ? '✅ Completed' : '🕒 Pending'}
            </Text>
        </View>
    );
}

const styles = StyleSheet.create({
    card: {
        padding: 12,
        borderRadius: 8,
        backgroundColor: '#f2f2f2',
        marginBottom: 12,
    },
    title: {
        fontWeight: 'bold',
        fontSize: 16,
    },
    status: {
        marginTop: 4,
        fontStyle: 'italic',
        color: '#555',
    },
});
