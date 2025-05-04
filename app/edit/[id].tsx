import { useLocalSearchParams, useRouter } from 'expo-router';
import { View, Text, TextInput, StyleSheet, Button, Alert } from 'react-native';
import { useTaskContext } from '../../contexts/TaskContext';
import { useEffect, useState } from 'react';
import type { Task } from '../../types/Task';
import BackButton from '../../components/BackButton';

/**
 * EditTaskScreen:
 * A screen to edit an existing task using task ID from route params.
 * It fetches the task from context, allows user to edit it, and saves updates.
 */
export default function EditTaskScreen() {
    const { id } = useLocalSearchParams();
    const router = useRouter();
    const { tasks, editTask } = useTaskContext();

    const task = tasks.find((t) => t.id === id);
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');

    useEffect(() => {
        if (task) {
            setTitle(task.title);
            setDescription(task.description);
        }
    }, [task]);

    const handleSave = () => {
        if (!title.trim()) {
            Alert.alert('Validation', 'Title is required.');
            return;
        }

        const updatedTask: Task = {
            ...task!,
            title,
            description,
        };

        editTask(updatedTask);
        router.push('/');
    };

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
            <Text style={styles.heading}>Edit Task</Text>

            <TextInput
                style={styles.input}
                value={title}
                onChangeText={setTitle}
                placeholder="Title"
            />
            <TextInput
                style={[styles.input, styles.textArea]}
                value={description}
                onChangeText={setDescription}
                placeholder="Description"
                multiline
                numberOfLines={4}
            />

            <Button title="Save Changes" onPress={handleSave} />
            <BackButton />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        padding: 20,
        flex: 1,
        backgroundColor: '#fff',
    },
    heading: {
        fontSize: 22,
        fontWeight: 'bold',
        marginBottom: 16,
    },
    input: {
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 6,
        padding: 10,
        marginBottom: 16,
    },
    textArea: {
        height: 100,
    },
});
