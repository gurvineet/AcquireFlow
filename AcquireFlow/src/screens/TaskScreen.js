// src/screens/TaskScreen.js

import React from 'react';
import { View, Text } from 'react-native';
import withGenericScreen from '../components/withGenericScreen';
import taskPlugin from '../plugins/taskPlugin';

const TaskScreen = (props) => {
  return (
    <View>
      <Text>Task Screen Content</Text>
    </View>
  );
};

export default withGenericScreen(
  TaskScreen,
  taskPlugin.screenData,
  taskPlugin.additionalComponents,
  taskPlugin.useOpenAi,
  taskPlugin.useRedux
);