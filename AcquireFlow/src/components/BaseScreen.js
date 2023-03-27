import React from 'react';
import { View, Text } from 'react-native';

const BaseScreen = ({ route }) => {
  const { title, content } = route.params;
  return (
    <View>
      <Text>{title}</Text>
      <Text>{content}</Text>
    </View>
  );
};

export default BaseScreen;