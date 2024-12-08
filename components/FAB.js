import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';

/**
 * FAB - Floating Action Button for adding new bookmarks.
 * @param {Function} onPress - Function to handle button press.
 */
const FAB = ({ onPress }) => {
    return (
        <TouchableOpacity style={styles.fab} onPress={onPress}>
            <Text style={styles.fabText}>+</Text>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    fab: {
        position: 'absolute',
        bottom: 20,
        right: 20,
        backgroundColor: '#6200ea',
        width: 60,
        height: 60,
        borderRadius: 30,
        justifyContent: 'center',
        alignItems: 'center',
    },
    fabText: {
        fontSize: 30,
        color: 'white',
    },
});

export default FAB;
