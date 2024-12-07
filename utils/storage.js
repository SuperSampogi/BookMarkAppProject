// utils/storage.js
import AsyncStorage from '@react-native-async-storage/async-storage';

const STORAGE_KEY = '@bookmarks';

export const getBookmarks = async () => {
    try {
        const storedBookmarks = await AsyncStorage.getItem(STORAGE_KEY);
        return storedBookmarks ? JSON.parse(storedBookmarks) : [];
    } catch (error) {
        console.error(error);
        return [];
    }
};

export const saveBookmark = async (bookmark) => {
    try {
        const bookmarks = await getBookmarks();
        bookmarks.push(bookmark);
        await AsyncStorage.setItem(STORAGE_KEY, JSON.stringify(bookmarks));
    } catch (error) {
        console.error(error);
    }
};

export const updateBookmark = async (updatedBookmark) => {
    try {
        const bookmarks = await getBookmarks();
        const index = bookmarks.findIndex(b => b.id === updatedBookmark.id);
        if (index !== -1) {
            bookmarks[index] = updatedBookmark;
            await AsyncStorage.setItem(STORAGE_KEY, JSON.stringify(bookmarks));
        }
    } catch (error) {
        console.error(error);
    }
};

export const deleteBookmark = async (id) => {
    try {
        const bookmarks = await getBookmarks();
        const updatedBookmarks = bookmarks.filter(b => b.id !== id);
        await AsyncStorage.setItem(STORAGE_KEY, JSON.stringify(updatedBookmarks));
    } catch (error) {
        console.error(error);
    }
};
