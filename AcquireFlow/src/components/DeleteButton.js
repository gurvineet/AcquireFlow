// src/components/DeleteButton.js

import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';

const DeleteButton = ({ onPress }) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.deleteButton}>
      <Text style={styles.deleteText}>Delete</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  deleteButton: {
    backgroundColor: '#FF3B30',
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 5,
  },
  deleteText: {
    color: 'white',
    fontSize: 16,
  },
});

export default DeleteButton;