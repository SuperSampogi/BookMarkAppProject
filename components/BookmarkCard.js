import React from 'react';
import { Card, Button } from 'react-native-paper';
import { StyleSheet, Text } from 'react-native';

/**
 * BookmarkCard - Displays individual bookmark details.
 * @param {Object} bookmark - The bookmark object containing title, URL, and ID.
 * @param {Function} onDelete - Function to handle bookmark deletion.
 * @param {Function} onEdit - Function to handle bookmark editing.
 */
const BookmarkCard = ({ bookmark, onDelete, onEdit }) => {
    return (
        <Card style={styles.card}>
            <Card.Content>
                <Text style={styles.title}>{bookmark.title}</Text>
                <Text style={styles.url}>{bookmark.url}</Text>
            </Card.Content>
            <Card.Actions>
                <Button onPress={() => onEdit(bookmark)}>Edit</Button>
                <Button onPress={() => onDelete(bookmark.id)}>Delete</Button>
            </Card.Actions>
        </Card>
    );
};

const styles = StyleSheet.create({
    card: {
        marginBottom: 15,
    },
    title: {
        fontSize: 18,
        fontWeight: 'bold',
    },
    url: {
        color: '#6200ee',
    },
});

export default BookmarkCard;
