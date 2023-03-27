// src/components/SelectorScreen.js

import React from "react";
import { View, TouchableOpacity, Text, StyleSheet } from "react-native";

const SelectorScreen = ({ options, onSelect }) => {
  return (
    <View style={styles.container}>
      {options.map((option, index) => (
        <TouchableOpacity key={index} onPress={() => onSelect(option)} style={styles.button}>
          <Text style={styles.buttonText}>{option.label}</Text>
        </TouchableOpacity>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 10,
  },
  button: {
    backgroundColor: "#f5f5f5",
    borderRadius: 5,
    padding: 10,
    marginBottom: 10,
  },
  buttonText: {
    fontSize: 16,
  },
});

export default SelectorScreen;