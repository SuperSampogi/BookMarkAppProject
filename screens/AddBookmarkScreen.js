import React, { useState, useEffect } from 'react';
import { View, TextInput, Button, StyleSheet, Alert } from 'react-native';
import { saveBookmark, getBookmarkById, updateBookmark } from '../utils/storage';

const AddBookmarkScreen = ({ route, navigation }) => {
    const [bookmark, setBookmark] = useState({ title: '', url: '' });

    useEffect(() => {
        const loadBookmark = async () => {
            if (route.params?.bookmarkId) {
                const bookmarkData = await getBookmarkById(route.params.bookmarkId);
                setBookmark(bookmarkData);
            }
        };
        loadBookmark();
    }, [route.params?.bookmarkId]);

    const handleSave = async () => {
        if (!bookmark.title || !bookmark.url) {
            Alert.alert('Error', 'Please fill in both fields.');
            return;
        }

        const newBookmark = { ...bookmark, id: bookmark.id || Date.now().toString() };

        if (bookmark.id) {
            await updateBookmark(newBookmark);
        } else {
            await saveBookmark(newBookmark);
            route.params?.addNewBookmark?.(newBookmark); // Update the bookmarks in HomeScreen
        }

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
