import { useRouter } from 'expo-router';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

/**
 * BackButton component provides a simple way to navigate
 * back to the previous screen using Expo Router.
 */
export default function BackButton() {
    const router = useRouter();

    return (
        <TouchableOpacity style={styles.button} onPress={() => router.back()}>
            <Ionicons name="arrow-back" size={20} color="#007bff" />
            <Text style={styles.text}>Back</Text>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    button: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 16,
    },
    text: {
        color: '#007bff',
        fontSize: 16,
        marginLeft: 6,
    },
});
