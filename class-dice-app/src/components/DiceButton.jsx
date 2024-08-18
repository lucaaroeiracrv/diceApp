import React from 'react';
import { Text, StyleSheet, TouchableOpacity } from 'react-native';

export default function DiceButton({ dice, rollDice }) {
  return (
    <TouchableOpacity onPress={rollDice} style={styles.button}>
      <Text style={styles.buttonText}>{dice}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    width: 70,
    height: 70,
    backgroundColor: '#000',
    justifyContent: 'center',
    alignItems: 'center',
    margin: 10,
    borderRadius: 10,
  },
  buttonText: {
    color: 'white',
    fontSize: 24,
  },
});
