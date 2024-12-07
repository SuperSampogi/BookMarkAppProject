import AsyncStorage from '@react-native-async-storage/async-storage';
import uuid from 'react-native-uuid';

const BOOKMARKS_KEY = 'bookmarks';

export const getBookmarks = async () => {
    const data = await AsyncStorage.getItem(BOOKMARKS_KEY);
    return data ? JSON.parse(data) : [];
};

export const addBookmark = async (bookmark) => {
    const bookmarks = await getBookmarks();
    const newBookmark = { ...bookmark, id: uuid.v4() };
    await AsyncStorage.setItem(BOOKMARKS_KEY, JSON.stringify([...bookmarks, newBookmark]));
};

export const updateBookmark = async (id, updatedBookmark) => {
    const bookmarks = await getBookmarks();
    const updatedBookmarks = bookmarks.map((item) =>
        item.id === id ? { ...item, ...updatedBookmark } : item
    );
    await AsyncStorage.setItem(BOOKMARKS_KEY, JSON.stringify(updatedBookmarks));
};

export const deleteBookmark = async (id) => {
    const bookmarks = await getBookmarks();
    const filteredBookmarks = bookmarks.filter((item) => item.id !== id);
    await AsyncStorage.setItem(BOOKMARKS_KEY, JSON.stringify(filteredBookmarks));
};
