import { Text, TouchableOpacity, StyleSheet } from 'react-native';
import { Link } from 'expo-router';

/**
 * A button that navigates to the create task screen.
 */
export default function AddButton() {
    return (
        <Link href="/create" asChild>
            {/* TouchableOpacity gets link behavior via asChild */}
            <TouchableOpacity style={styles.button}>
                <Text style={styles.text}>+ Add New Task</Text>
            </TouchableOpacity>
        </Link>
    );
}

const styles = StyleSheet.create({
    button: {
        backgroundColor: '#007bff',
        padding: 12,
        borderRadius: 8,
        marginBottom: 16,
        alignItems: 'center',
    },
    text: {
        color: 'white',
        fontWeight: 'bold',
    },
});
