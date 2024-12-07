import React, { useState, useEffect } from 'react';
import { View, FlatList, StyleSheet } from 'react-native';
import BookmarkCard from '../components/BookmarkCard';
import CustomButton from '../components/CustomButton';
import { getBookmarks, deleteBookmark } from '../utils/storage';

const HomeScreen = ({ navigation }) => {
    const [bookmarks, setBookmarks] = useState([]);

    useEffect(() => {
        loadBookmarks();
    }, []);

    const loadBookmarks = async () => {
        const data = await getBookmarks();
        setBookmarks(data);
    };

    const handleDelete = async (id) => {
        await deleteBookmark(id);
        loadBookmarks();
    };

    return (
        <View style={styles.container}>
            <FlatList
                data={bookmarks}
                keyExtractor={(item) => item.id.toString()}
                renderItem={({ item }) => (
                    <BookmarkCard
                        title={item.title}
                        url={item.url}
                        onEdit={() => navigation.navigate('Add Bookmark', { bookmark: item })}
                        onDelete={() => handleDelete(item.id)}
                    />
                )}
            />
            <CustomButton title="Add Bookmark" onPress={() => navigation.navigate('Add Bookmark')} />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        backgroundColor: '#f4f4f4',
    },
});

export default HomeScreen;
