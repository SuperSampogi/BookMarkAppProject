import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './screens/HomeScreen';
import AddBookmarkScreen from './screens/AddBookmarkScreen';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        {/* Home Screen */}
        <Stack.Screen name="Home" component={HomeScreen} />
        {/* Add/Edit Bookmark Screen */}
        <Stack.Screen name="Add URLs" component={AddBookmarkScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
