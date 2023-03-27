// src/components/Toolbar.js

import React from "react";
import { View, TouchableOpacity, Text, StyleSheet } from "react-native";

const Toolbar = ({ actions }) => {
  return (
    <View style={styles.toolbar}>
      {actions.map((action, index) => (
        <TouchableOpacity key={index} onPress={action.onPress} style={styles.button}>
          <Text style={styles.buttonText}>{action.label}</Text>
        </TouchableOpacity>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  toolbar: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 10,
  },
  button: {
    backgroundColor: "#f5f5f5",
    borderRadius: 5,
    padding: 10,
  },
  buttonText: {
    fontSize: 16,
  },
});

export default Toolbar;