import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import withGenericScreen from '../components/withGenericScreen';
import welcomePlugin from '../plugins/welcomePlugin';
import { useNavigation } from '@react-navigation/native';
import { colors } from '../theme';

const WelcomeScreen = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('GoalScreen')}>
        <Text style={styles.buttonText}>Get Started</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 30,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  description: {
    fontSize: 18,
    textAlign: 'center',
    marginBottom: 30,
  },
  button: {
    backgroundColor: colors.primary,
    paddingHorizontal: 30,
    paddingVertical: 10,
    borderRadius: 20,
  },
  buttonText: {
    color: colors.white,
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default withGenericScreen(
  WelcomeScreen,
  welcomePlugin.screenData,
  welcomePlugin.additionalComponents,
  welcomePlugin.useOpenAi,
  welcomePlugin.useRedux
);