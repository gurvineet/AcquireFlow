// src/screens/GoalScreen.js

import React from 'react';
import { View, Text } from 'react-native';
import withGenericScreen from '../components/withGenericScreen';
import goalPlugin from '../plugins/goalPlugin';

const GoalScreen = (props) => {
  return (
    <View>
      <Text>Goal Screen Content</Text>
    </View>
  );
};

export default withGenericScreen(
  GoalScreen,
  goalPlugin.screenData,
  goalPlugin.additionalComponents,
  goalPlugin.useOpenAi,
  goalPlugin.useRedux
);