import { View, Text, TextInput, StyleSheet, Button, Alert } from 'react-native';
import { useState } from 'react';
import { useRouter } from 'expo-router';
import { useTaskContext } from '../contexts/TaskContext';
import type { Task } from '../types/Task';
import BackButton from '../components/BackButton';


export default function CreateTaskScreen() {
    const router = useRouter();
    const { addTask } = useTaskContext();

    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');

    const handleAddTask = () => {
        if (!title.trim()) {
            Alert.alert('Validation', 'Title is required.');
            return;
        }

        const newTask: Task = {
            id: Date.now().toString(),
            title,
            description,
            status: 'pending',
        };

        addTask(newTask);
        router.push('/');
    };

    return (
        <View style={styles.container}>
            <Text style={styles.heading}>Add New Task</Text>

            <TextInput
                style={styles.input}
                placeholder="Title"
                value={title}
                onChangeText={setTitle}
            />

            <TextInput
                style={[styles.input, styles.textArea]}
                placeholder="Description"
                value={description}
                onChangeText={setDescription}
                multiline
                numberOfLines={4}
            />

            <Button title="Add Task" onPress={handleAddTask} />
            <BackButton />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        padding: 20,
        paddingTop: 60,
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
