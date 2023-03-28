// src/navigators/MainNavigator.js

import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import screens from '../screens';

const Stack = createNativeStackNavigator();

const MainNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: '#f4511e',
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
          fontWeight: 'bold',
        },
      }}
    >
      {Object.keys(screens).map((key) => (
        <Stack.Screen key={key} name={key} component={screens[key]} />
      ))}
    </Stack.Navigator>
  );
};

export default MainNavigator;