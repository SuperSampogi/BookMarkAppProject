import React, { useState, useEffect } from 'react';
import { View, FlatList, StyleSheet } from 'react-native';
import FAB from '../components/FAB';
import BookmarkCard from '../components/BookmarkCard';
import { getBookmarks, deleteBookmark } from '../utils/storage';

/**
 * HomeScreen - Displays the list of bookmarks and provides actions to add, edit, or delete.
 * @param {Object} navigation - Navigation object for navigating between screens.
 */
const HomeScreen = ({ navigation }) => {
    const [bookmarks, setBookmarks] = useState([]);

    useEffect(() => {
        // Load bookmarks when screen is focused
        const loadBookmarks = async () => {
            const storedBookmarks = await getBookmarks();
            setBookmarks(storedBookmarks);
        };

        const unsubscribe = navigation.addListener('focus', loadBookmarks);
        return unsubscribe;
    }, [navigation]);

    const handleDelete = async (id) => {
        // Delete bookmark by ID and refresh the list
        await deleteBookmark(id);
        const updatedBookmarks = await getBookmarks();
        setBookmarks(updatedBookmarks);
    };

    return (
        <View style={styles.container}>
            <FlatList
                data={bookmarks}
                renderItem={({ item }) => (
                    <BookmarkCard
                        bookmark={item}
                        onEdit={(bookmark) => navigation.navigate('Add URLs', { bookmarkId: bookmark.id })}
                        onDelete={handleDelete}
                    />
                )}
                keyExtractor={(item) => item.id}
            />
            <FAB onPress={() => navigation.navigate('Add URLs')} />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f5f5f5',
        padding: 15,
    },
});

export default HomeScreen;
