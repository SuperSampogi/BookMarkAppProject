import React, { useState, useEffect } from 'react';
import { View, FlatList, StyleSheet } from 'react-native';
import FAB from '../components/FAB';
import BookmarkCard from '../components/BookmarkCard';
import { getBookmarks, deleteBookmark } from '../utils/storage';

const HomeScreen = ({ navigation }) => {
    const [bookmarks, setBookmarks] = useState([]);

    useEffect(() => {
        const loadBookmarks = async () => {
            const storedBookmarks = await getBookmarks();
            setBookmarks(storedBookmarks);
        };

        const unsubscribe = navigation.addListener('focus', loadBookmarks);
        return unsubscribe;
    }, [navigation]);

    const handleDelete = async (id) => {
        await deleteBookmark(id);
        const updatedBookmarks = await getBookmarks();
        setBookmarks(updatedBookmarks);
    };

    const addNewBookmark = async (newBookmark) => {
        setBookmarks((prevBookmarks) => [...prevBookmarks, newBookmark]);
    };

    return (
        <View style={styles.container}>
            <FlatList
                data={bookmarks}
                renderItem={({ item }) => (
                    <BookmarkCard
                        bookmark={item}
                        onEdit={(id) => navigation.navigate('Add Bookmark', { bookmarkId: id })}
                        onDelete={handleDelete}
                    />
                )}
                keyExtractor={(item) => item.id}
            />
            <FAB onPress={() => navigation.navigate('Add Bookmark', { addNewBookmark })} />
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
