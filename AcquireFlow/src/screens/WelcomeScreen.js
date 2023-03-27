// src/screens/WelcomeScreen.js

import React from 'react';
import { View, Text } from 'react-native';
import withGenericScreen from '../components/withGenericScreen';
import welcomePlugin from '../plugins/welcomePlugin';

const WelcomeScreen = (props) => {
  return (
    <View>
      <Text>Welcome Screen Content</Text>
    </View>
  );
};

export default withGenericScreen(
  WelcomeScreen,
  welcomePlugin.screenData,
  welcomePlugin.additionalComponents,
  welcomePlugin.useOpenAi,
  welcomePlugin.useRedux
);