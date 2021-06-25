import 'react-native-gesture-handler';
import React from 'react';

import AlbumList from './src/components/AlbumList';
import PhotoList from './src/components/PhotoList';
import Home from './src/components/Home';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

const Stack = createStackNavigator();

// Create a component
export default  App = () => (
  <NavigationContainer>
    <Stack.Navigator initialRouteName="home">
      <Stack.Screen
        name="home"
        component={Home}
        options={{title: 'Home'}}
      />
      <Stack.Screen
        name="albumList"
        component={AlbumList}
        options={{title: 'Albums'}}
      />
      <Stack.Screen
        name="photoList"
        component={PhotoList}
        options={{title: 'Photos'}}
      />
    </Stack.Navigator>
  </NavigationContainer>
);

