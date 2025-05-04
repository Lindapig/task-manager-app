import { View, Text, StyleSheet } from 'react-native';
import { Task } from '../types/Task';
import { Link } from 'expo-router';

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
            <Link
                href={{ pathname: '/edit/[id]', params: { id: task.id } } as const}
                asChild
            >
                <Text style={styles.editLink}>✏️ Edit</Text>
            </Link>
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
    editLink: {
        color: '#007bff',
        marginTop: 8,
        fontWeight: '500',
    },
});
