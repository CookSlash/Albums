// Code for Android

// Import a library to help create a componant
import React from 'react';
import { Text, AppRegistry } from 'react-native';

// Create a component
const App = () => (
    <Text>Some Text</Text>
);
  

// Render it to the device
AppRegistry.registerComponent('albums', () => App);
