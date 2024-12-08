import AsyncStorage from '@react-native-async-storage/async-storage';

const STORAGE_KEY = '@bookmarks';

/**
 * Retrieves all bookmarks from storage.
 */
export const getBookmarks = async () => {
    try {
        const storedBookmarks = await AsyncStorage.getItem(STORAGE_KEY);
        return storedBookmarks ? JSON.parse(storedBookmarks) : [];
    } catch (error) {
        console.error(error);
        return [];
    }
};

/**
 * Saves a new bookmark to storage.
 * @param {Object} bookmark - Bookmark to save.
 */
export const saveBookmark = async (bookmark) => {
    try {
        const bookmarks = await getBookmarks();
        bookmarks.push(bookmark);
        await AsyncStorage.setItem(STORAGE_KEY, JSON.stringify(bookmarks));
    } catch (error) {
        console.error(error);
    }
};

/**
 * Updates an existing bookmark in storage.
 * @param {Object} updatedBookmark - Updated bookmark data.
 */
export const updateBookmark = async (updatedBookmark) => {
    try {
        const bookmarks = await getBookmarks();
        const index = bookmarks.findIndex((b) => b.id === updatedBookmark.id);
        if (index !== -1) {
            bookmarks[index] = updatedBookmark;
            await AsyncStorage.setItem(STORAGE_KEY, JSON.stringify(bookmarks));
        }
    } catch (error) {
        console.error(error);
    }
};

/**
 * Deletes a bookmark from storage by ID.
 * @param {string} id - ID of the bookmark to delete.
 */
export const deleteBookmark = async (id) => {
    try {
        const bookmarks = await getBookmarks();
        const updatedBookmarks = bookmarks.filter((b) => b.id !== id);
        await AsyncStorage.setItem(STORAGE_KEY, JSON.stringify(updatedBookmarks));
    } catch (error) {
        console.error(error);
    }
};

/**
 * Retrieves a specific bookmark by ID.
 * @param {string} id - Bookmark ID.
 */
export const getBookmarkById = async (id) => {
    try {
        const bookmarks = await getBookmarks();
        return bookmarks.find((b) => b.id === id);
    } catch (error) {
        console.error(error);
    }
};
