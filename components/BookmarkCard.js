import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

const BookmarkCard = ({ title, url, onEdit, onDelete }) => {
    return (
        <View style={styles.card}>
            <Text style={styles.title}>{title}</Text>
            <Text style={styles.url}>{url}</Text>
            <View style={styles.actions}>
                <TouchableOpacity onPress={onEdit} style={styles.editButton}>
                    <Text>Edit</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={onDelete} style={styles.deleteButton}>
                    <Text>Delete</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    card: {
        backgroundColor: '#fff',
        padding: 15,
        borderRadius: 8,
        marginVertical: 10,
        shadowColor: '#000',
        shadowOpacity: 0.1,
        shadowRadius: 4,
        elevation: 2,
    },
    title: {
        fontSize: 18,
        fontWeight: 'bold',
    },
    url: {
        color: '#007AFF',
        marginBottom: 10,
    },
    actions: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    editButton: {
        backgroundColor: '#ffd700',
        padding: 8,
        borderRadius: 5,
    },
    deleteButton: {
        backgroundColor: '#ff4d4d',
        padding: 8,
        borderRadius: 5,
    },
});

export default BookmarkCard;
