// components/BookmarkCard.js
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Card, Button } from 'react-native-paper';

const BookmarkCard = ({ bookmark, onDelete, onEdit }) => {
    return (
        <Card style={styles.card}>
            <Card.Content>
                <Text style={styles.title}>{bookmark.title}</Text>
                <Text style={styles.url}>{bookmark.url}</Text>
            </Card.Content>
            <Card.Actions>
                <Button onPress={onEdit}>Edit</Button>
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
