import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { screenDataMap } from '../data';
import BaseScreen from '../components/BaseScreen';
import withGenericScreen from '../components/withGenericScreen';

const Stack = createStackNavigator();

const MainNavigator = () => {
  return (
    <Stack.Navigator>
      {Object.entries(screenDataMap).map(([screenKey, screenData]) => {
        const ScreenComponent = withGenericScreen(
          BaseScreen,
          screenData.plugins,
          screenData.data
        );
        return (
          <Stack.Screen
            key={screenKey}
            name={screenKey}
            component={ScreenComponent}
            options={{
              title: screenData.data.title,
              headerStyle: {
                backgroundColor: '#f4511e',
              },
              headerTintColor: '#fff',
              headerTitleStyle: {
                fontWeight: 'bold',
              },
            }}
          />
        );
      })}
    </Stack.Navigator>
  );
};

export default MainNavigator;