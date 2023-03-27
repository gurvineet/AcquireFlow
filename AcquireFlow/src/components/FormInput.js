// src/components/FormInput.js

import React from 'react';
import { TextInput, StyleSheet } from 'react-native';

const FormInput = (props) => {
  return (
    <TextInput
      style={styles.input}
      {...props}
    />
  );
};

const styles = StyleSheet.create({
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    paddingLeft: 10,
    paddingRight: 10,
    marginBottom: 10,
  },
});

export default FormInput;