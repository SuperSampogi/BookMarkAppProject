import React, { useState, useEffect } from 'react';
import { View, TextInput, Button, StyleSheet, Alert } from 'react-native';
import { saveBookmark, getBookmarkById, updateBookmark } from '../utils/storage';

/**
 * AddBookmarkScreen - Handles adding or editing a bookmark.
 * @param {Object} route - Route params for passing bookmark details.
 * @param {Object} navigation - Navigation object for navigating between screens.
 */
const AddBookmarkScreen = ({ route, navigation }) => {
    const [bookmark, setBookmark] = useState({ title: '', url: '' });

    useEffect(() => {
        // Load existing bookmark for editing if `bookmarkId` is passed
        const loadBookmark = async () => {
            if (route.params?.bookmarkId) {
                const bookmarkData = await getBookmarkById(route.params.bookmarkId);
                if (bookmarkData) setBookmark(bookmarkData);
            }
        };
        loadBookmark();
    }, [route.params?.bookmarkId]);

    const handleSave = async () => {
        // Validation for empty fields
        if (!bookmark.title || !bookmark.url) {
            Alert.alert('Error', 'Please fill in both fields.');
            return;
        }

        const updatedBookmark = { ...bookmark, id: bookmark.id || Date.now().toString() };

        if (bookmark.id) {
            // Update existing bookmark
            await updateBookmark(updatedBookmark);
        } else {
            // Save new bookmark
            await saveBookmark(updatedBookmark);
        }

        // Go back to Home screen after saving
        navigation.goBack();
    };

    return (
        <View style={styles.container}>
            <TextInput
                placeholder="Title"
                value={bookmark.title}
                onChangeText={(text) => setBookmark({ ...bookmark, title: text })}
                style={styles.input}
            />
            <TextInput
                placeholder="URL"
                value={bookmark.url}
                onChangeText={(text) => setBookmark({ ...bookmark, url: text })}
                style={styles.input}
            />
            <Button title="Save Bookmark" onPress={handleSave} />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
    },
    input: {
        borderBottomWidth: 1,
        marginBottom: 10,
        padding: 8,
    },
});

export default AddBookmarkScreen;
