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
        <Stack.Screen name="Home" component={HomeScreen} />
        {/* Register the screen with the name "Add Bookmark" */}
        <Stack.Screen name="Add Bookmark" component={AddBookmarkScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
