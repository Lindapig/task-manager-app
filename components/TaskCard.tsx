import { View, Text, StyleSheet, Button, Alert } from 'react-native';
import { Task } from '../types/Task';
import { Link } from 'expo-router';
import { useTaskContext } from '../contexts/TaskContext';

interface Props {
    task: Task;
}

/**
 * TaskCard component displays a single task's information including
 * title, description, status, and provides options to edit or delete the task.
 */
export default function TaskCard({ task }: Props) {
    const { deleteTask } = useTaskContext();

    const handleDelete = () => {
        Alert.alert(
            'Delete Task',
            'Are you sure you want to delete this task?',
            [
                { text: 'Cancel', style: 'cancel' },
                { text: 'Delete', style: 'destructive', onPress: () => deleteTask(task.id) },
            ]
        );
    };

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
            <Text
                style={[styles.actionButton, styles.deleteButton]}
                onPress={handleDelete}
            >
                🗑️ Delete
            </Text>


            {/* <Button title="Delete" color="red" onPress={handleDelete} /> */}
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
    actions: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 12,
    },

    actionButton: {
        flex: 1,
        textAlign: 'center',
        paddingVertical: 8,
        marginHorizontal: 4,
        borderRadius: 6,
        fontWeight: '500',
        color: 'white',
    },

    editButton: {
        backgroundColor: '#007bff',
    },

    deleteButton: {
        backgroundColor: '#dc3545',
    },
});
