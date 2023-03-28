import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import withGenericScreen from '../components/withGenericScreen';
import welcomePlugin from '../plugins/welcomePlugin';
import { useNavigation } from '@react-navigation/native';

const WelcomeScreen = () => {
  const navigation = useNavigation();

  return (
    <View>
      <Text>Welcome Screen Content</Text>
      <TouchableOpacity onPress={() => navigation.navigate('GoalScreen')}>
        <Text>Go to Goals</Text>
      </TouchableOpacity>
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