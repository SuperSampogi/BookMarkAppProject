import React, { useState } from 'react';
import { View, StyleSheet, Alert } from 'react-native';
import InputField from '../components/InputField';
import CustomButton from '../components/CustomButton';
import { addBookmark, updateBookmark } from '../utils/storage';

const AddBookmarkScreen = ({ route, navigation }) => {
    const bookmark = route.params?.bookmark;
    const [title, setTitle] = useState(bookmark?.title || '');
    const [url, setUrl] = useState(bookmark?.url || '');

    const handleSave = async () => {
        if (!title || !url) {
            Alert.alert('Error', 'Please fill in all fields.');
            return;
        }
        if (bookmark) {
            await updateBookmark(bookmark.id, { title, url });
        } else {
            await addBookmark({ title, url });
        }
        navigation.goBack();
    };

    return (
        <View style={styles.container}>
            <InputField placeholder="Title" value={title} onChangeText={setTitle} />
            <InputField placeholder="URL" value={url} onChangeText={setUrl} keyboardType="url" />
            <CustomButton title="Save" onPress={handleSave} />
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

export default AddBookmarkScreen;
